import conf from '../conf/conf';
import { Client, Databases, ID, Query, Storage } from "appwrite";

console.table(conf)

export class service{
  client = new Client()
  databases;
  bucket;

  constructor(){
    this.client
          .setEndpoint(conf.appWriteUrl) 
          .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }
  async createPost({title, slug, content, featuredImage, status, userId}){
    try {
        return await this.databases.createDocument(
          conf.appWriteDatabaseId,
          conf.appWriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        )
    } catch (error) {
        console.log("Appwrite service :: createPost :: error", error);
    }
}

  async updatePost(slug,{title, featuredImage,content,status, userId}){
    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      )
    } catch (error) {
      console.log("appwrite :: updatePost :: error",error);   
    }
  }
  async   deletePost(slug){
    try {
       return await this.databases.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
      )
    
    } catch (error) {
      console.log("appwrite :: deletePost :: error",error);  
      return false 
    }
  }
  async   getPost(slug){
    try {
      const file = await this.databases.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
      )
      return file
    } catch (error) {
      console.log("appwrite :: getPost :: error",error);  
      return false 
    }
  }

  async getPosts(quries = [Query.equal('status','active')]){
    try {
      const posts = await this.databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        quries,
      )
      // console.log("posts  ",posts);
      return posts
    } catch (error) {
      console.log("appwrite :: getPosts :: error ",error);
    }
  }

  // file upload service

  async uploadFile(file){
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file,
      )
    } catch (error) {
      console.log("appwrite :: uploadFile :: error ", error);
      return false
    }
  }

   async deleteFile(fileId){
    try {
      return await this.bucket.deleteFile(
        conf.appWriteBucketId,
        fileId
      )
    } catch (error) {
      console.log("appwrite :: deleteFile :: error ",error);
      return false
    }
   }


   getFilePreviewIn(fileId){
    return this.bucket.getFilePreview(
      conf.appWriteBucketId,
      fileId
    )
   }
}


const appwriteService = new service()
export default appwriteService