import { Request, Response, Router } from "express";
import { authorizationMiddleware } from "../middleware/authorization.middleware";
import PostsService from "../services/posts.service";
const router = Router();

router.post(
  "/",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      await PostsService.create(req.body);
      res.send({ message: "Post Criado com Sucesso!" });
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }
);

router.get(
  "/list",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    const posts = await PostsService.getAll();
    res.send(posts);
  }
);

router.get(
  "/:id",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    const post = await PostsService.getById(req.params.id);
    if (!post) return res.status(400).send({ message: "Post Não Encontrado!" });
    res.status(200).send(post);
  }
);

router.get(
  "/list/:username",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    const post = await PostsService.getByAuthor(req.params.username);
    if (!post)
      return res.status(400).send({ message: "Posts Não Encontrados!" });
    res.status(200).send(post);
  }
);

router.delete(
  "/remove/:id",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    try {
      await PostsService.remove(req.params.id);
      res.status(200).send({ message: "Post removido com sucesso!" });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
);

router.put(
  "/:id",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    try {
      await PostsService.update(req.params.id, req.body);
      res.status(200).send({ message: "Post Atualizado com Sucesso!" });
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }
);

export default router;
