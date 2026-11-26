import z from "zod";
export const registerschema=z.object({
    name: z.string().min(3,"Name must contain atleast 3 letters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Password must contain 8 characters"),
    age: z.coerce.number().min(18, "Age must be greater than 18")
})