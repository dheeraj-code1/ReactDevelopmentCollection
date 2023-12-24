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
      // console.log("IDDD :".conf.appWriteDatabaseId);
        return await this.databases.createDocument(
          conf.appWriteDatabaseId,
          conf.appWriteCollectionId,
          // ID.unique(),
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
        console.log("Appwrite serive :: createPost :: error", error);
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
       await this.databases.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
      )
      return true
    } catch (error) {
      console.log("appwrite :: deletePost :: error",error);  
      return false 
    }
  }
  async   getPost(slug){
    try {
       await this.databases.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
      )
      return true
    } catch (error) {
      console.log("appwrite :: getPost :: error",error);  
      return false 
    }
  }

  async getPosts(quries = [Query.equal('status','active')]){
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        quries,

      )
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


   getFilePreview(fileId){
    return this.bucket.getFilePreview(
      conf.appWriteBucketId,
      fileId
    )
   }
}


const appwriteService = new service()
export default appwriteService