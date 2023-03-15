// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Post from 'App/Models/Post'

export default class PostsController {
    // async store({ request, response, auth }) {
    //     try {
    //       const user = auth.user
    //       const { images, postElements, links } = request.post()
    //       const user = await User.query().where('id', user_id).with('posts').first()
    //       const posts = user.getRelated('posts')
    //     //   const newPost = new Post({ user_id: user.id, images, post_elements: postElements, links })
    //     //   await newPost.save()
    
    //       return response.status(201).json(newPost)
    //     } catch (error) {
    //       console.error(error)
    //       return response.status(500).json({ message: 'Error creating post' })
    //     }
    //   }
    // public async store ({request,session,response}:HttpContextContract){
    //     const imageSchema = schema.create({
    //         image: schema.file({
    //           size: '2mb',
    //           extnames: ['jpg', 'jpeg', 'png', 'gif']
    //         })
    //       })
        
    //       const postElementSchema = schema.create({
    //         title: schema.string(),
    //         content: schema.string(),
    //       })
        
    //       const linkSchema = schema.create({
    //         url: schema.string({}, [
    //           rules.url({
    //             allow_underscores: true,
    //             allow_trailing_dot: true,
    //           })
    //         ]),
    //       })
        
    //       const { type } = request.post()
    //       switch (type) {
    //         case 'image':
    //           const { image } = await request.validate({ schema: imageSchema })
    //           const imageName = `${new Date().getTime()}-${image.clientName}`
    //           await image.move(Application.publicPath('uploads/images'), {
    //             name: imageName
    //           })
        
    //           if (!image.moved()) {
    //             session.flash('error', 'Failed to upload image')
    //             return response.redirect().back()
    //           }
        
    //           session.flash('success', 'Image uploaded successfully')
    //           break
        
    //         case 'post_element':
    //           const { title, content } = await request.validate({ schema: postElementSchema })
    //           // Store the post element
    //           break
        
    //         case 'link':
    //           const { url } = await request.validate({ schema: linkSchema })
    //           // Store the link
    //           break
        
    //         default:
    //           session.flash('error', 'Invalid form type')
    //           return response.redirect().back()
    //       }
        
    //       return response.redirect().back()
    //         // const { images, postElements, links } = request.body;
    //         // const user = request.user;
        
    //         // const newStory = new Post({ user_id: user.id, images, story_elements: JSON.stringify(storyElements), links: JSON.stringify(links) });
    //         // const savedStory = await newStory.save();
        
    //         // user.stories().attach(savedStory.id);
    //         // response.status(201).json(savedStory);
    //         // console.error(error);
    //         // response.status(500).json({ message: 'Error creating story' });
    // }
}
