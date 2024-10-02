import { Button } from "@/components/ui/my-button";
import { MyInput } from "@/components/ui/my-input";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/register")({
    component: Register,
});

export function Register() {
    const usernameCandidate = localStorage.getItem(
        "candidateUsername"
    ) as string;

    return (
        <section id="register" className="flex items-center justify-center">
            <div className="flex flex-col gap-4 p-8 md:p-16 font-main w-[600px]">
                <div>
                    <span className="text-purple-600">Portofolia.id</span>
                    <h1 className="text-xl font-extrabold">
                        Ini adalah langkah awal!
                    </h1>
                    <p className="text-sm">
                        Klaim{" "}
                        <span className="underline">{usernameCandidate}</span>{" "}
                        segera!
                    </p>
                </div>

                <form>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            {usernameCandidate ? (
                                <MyInput
                                    label="Username"
                                    type="text"
                                    disabled={true}
                                    value={usernameCandidate}
                                />
                            ) : (
                                <MyInput label="Username" type="text" />
                            )}
                            <MyInput label="Email" type="email" />
                            <MyInput label="Nama Lengkap" type="text" />
                            <MyInput label="Nama Panggilan" type="text" />
                        </div>
                        <div>
                            <Button
                                title="Daftar"
                                customGradient="bg-gradient-to-tl from-purple-900 to-purple-600"
                                textColor="text-white"
                                textWeight="font-semibold"
                            ></Button>
                        </div>
                    </div>
                </form>

                <div></div>
            </div>
        </section>
    );
}
