/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import { Loader2 } from "lucide-react";
import {
    FaYoutube,
    FaInstagram,
    FaFacebook,
    FaTelegramPlane,
    FaWhatsapp,
} from "react-icons/fa";
import { motion } from "motion/react";

const schema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    message: z.string().min(5, "Message too short"),
});

type FormData = z.infer<typeof schema>;

export default function ContactSection() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                data,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
            );
            toast.success("Message sent!", { duration: 1500 });
            reset();
        } catch (err) {
            toast.error("Failed to send!", { duration: 1500 });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center px-4 py-20 transition-colors">
            <Toaster position="top-center" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 p-8 rounded-2xl shadow-xl border border-neutral-300 dark:border-neutral-800 backdrop-blur-md bg-white/60 dark:bg-white/5"
            >
                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Contact Me</h2>

                    <Input
                        {...register("name")}
                        placeholder="Name"
                        className="bg-white/70 dark:bg-neutral-800 text-black dark:text-white border border-emerald-400 placeholder:text-neutral-500"
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

                    <Input
                        {...register("email")}
                        placeholder="Email"
                        className="bg-white/70 dark:bg-neutral-800 text-black dark:text-white border border-emerald-400 placeholder:text-neutral-500"
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

                    <Textarea
                        {...register("message")}
                        placeholder="Your message..."
                        rows={5}
                        className="bg-white/70 dark:bg-neutral-800 text-black dark:text-white border border-emerald-400 placeholder:text-neutral-500"
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 transition-all"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </Button>
                </motion.form>

                {/* Map + Socials */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 flex flex-col justify-between"
                >
                    <Card className="h-64 overflow-hidden border border-emerald-600 bg-white/60 dark:bg-neutral-800">
                        <CardContent className="p-0 h-full">
                            <iframe
                                src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full"
                                loading="lazy"
                            />
                        </CardContent>
                    </Card>

                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="https://youtube.com/@parkour_by_animesh?si=ZTEpZ5oYgpz1AS70" target="_blank" rel="noreferrer">
                            <FaYoutube className="text-2xl hover:text-emerald-500 transition" />
                        </a>
                        <a href="https://www.instagram.com/active_animesh?utm_source=qr&igsh=bHE0aW5lemZzMGw0" target="_blank" rel="noreferrer">
                            <FaInstagram className="text-2xl hover:text-emerald-500 transition" />
                        </a>
                        <a href="https://www.facebook.com/animesh.prakash.16" target="_blank" rel="noreferrer">
                            <FaFacebook className="text-2xl hover:text-emerald-500 transition" />
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                        <a
                            href="https://t.me/who_am_i_geek"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded shadow"
                        >
                            <FaTelegramPlane /> Telegram
                        </a>
                        <a
                            href="https://wa.me/+916207039191"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded shadow"
                        >
                            <FaWhatsapp /> WhatsApp
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
