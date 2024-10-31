import { Router} from "express";

const router = Router();

router.get("/doctors", (req,res) => {
    res.status(200).send("Lista de médicos");
});

export default router; 