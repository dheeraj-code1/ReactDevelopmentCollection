import React, { useCallback, useEffect, useState } from "react";
import { Button, Input, Select, RTE } from "../index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appwriteService from "../../appwrite/config";

function PostForm({ post }) {
  // const [posts, setPosts] =  useState({})
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  // console.log("22: ",userData);
  const submit = async (data) => {
    console.log("PostId:: ",data);
    console.log("userData ",userData);
    if (post) {
      
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
      if (file) {
        await appwriteService.deleteFile(post.featuredImage)
      }

        const dbPost = await appwriteService.updatePost(data.slug, {
            ...data,
            featuredImage: file ? file.$id : data.image[0],
        });

        if (dbPost) {
          // setPosts(dbPost)
          console.log(dbPost);
            navigate(`/post/${dbPost.$id}`);
        }
    } else {
        const file = await appwriteService.uploadFile(data.image[0]);

        if (file) {
            const fileId = file.$id;
            data.featuredImage = fileId;
            const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
            if (dbPost) {
              // setPosts(posts)
                console.log(dbPost);
                navigate(`/post/${dbPost.$id}`);
            }else{
              // navigate('/')
            }


        }
    }
};


  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }

      return () => subscription.unsubscribe();
      
    });
  }, [watch, setValue, slugTransform]);
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="title :"
          placeholder="title"
          className="mb-4"
          defaultValue = {post?.title || ""}
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxzzzzzzzzzzzz
          defaultValue = {post?.slug || "custom slug"}
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {/* {console.log("yessss ",post)} */}
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreviewIn(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
