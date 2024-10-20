import { z } from "zod";

import { articleSchema } from "@/lib/schema/article";

export type Article = z.infer<typeof articleSchema>;
