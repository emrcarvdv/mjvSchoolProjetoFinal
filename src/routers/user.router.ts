import { Request, Response, Router } from "express";
import UsersService from "../services/users.service";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    await UsersService.create(req.body);
    res.send({ message: "Usuário Criado com Sucesso!" });
  } catch (err: any) {
    res.status(400).send({ message: err.message });
  }
});

router.get("/list", async (req: Request, res: Response) => {
  const users = await UsersService.getAll();
  res.send(users);
});

router.get("/:username", async (req: Request, res: Response) => {
  const user = await UsersService.getByUsername(req.params.username);
  if (!user)
    return res.status(400).send({ message: "Usuário Não Encontrado!" });
  res.status(200).send(user);
});

router.delete("/remove/:username", async (req: Request, res: Response) => {
  try {
    await UsersService.remove(req.params.username);
    res.status(200).send({ message: "Usuário removido com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

router.put("/:username", async (req: Request, res: Response) => {
  try {
    await UsersService.update(req.params.username, req.body);
    res.status(200).send({ message: "Usuário Atualizado com Sucesso!" });
  } catch (err: any) {
    res.status(400).send({ message: err.message });
  }
});

export default router;
