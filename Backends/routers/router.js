import express from "express";
import { getallPost, newPost } from "../controller/post.js";

const router = express.Router()


router.get('/get',getallPost)
router.post('/post',newPost)


export default router;