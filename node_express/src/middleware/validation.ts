import type { Request, Response, NextFunction } from "express";

import type { RegisterRequestBody } from "../config/types.ts"

export function validateregisterdata(req: Request<{}, {}, RegisterRequestBody>, res: Response, next: NextFunction): void {

  const { username, email, name, role, password } = req.body;

  let emailregex: string = "/^[a-za-z0-9._%+-]+@[a-za-z0-9.-]+\.[a-za-z]{2,}$/";

  if (!username || !email || !name || !role || !password || !emailregex.match(email)) {
    res.status(400).json({ "message": "wrong schema provided" });
    return;
  }

  next();
};
