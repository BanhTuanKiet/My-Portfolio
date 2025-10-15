import { GraduationCap, Award } from "lucide-react"

export default function Education() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Education</h2>
                <p className="text-muted-foreground text-center mb-12">
                    Academic background and qualifications
                </p>

                <div className="space-y-6">
                    {/* --- Bằng đại học --- */}
                    <div className="cursor-pointer group bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 block">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <GraduationCap className="h-6 w-6 text-primary" />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                            Engineering of Information Technology
                                        </h3>
                                        <p>
                                            Ho Chi Minh City University of Technology
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-end">
                                        <span className="text-sm text-muted-foreground">
                                            2022 – 2026
                                        </span>
                                        {/* <div className="flex items-center gap-1 mt-1">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        <span className="text-muted-foreground">GPA:</span>{" "}
                        <span className="font-semibold">3.48/4.0</span>
                      </span>
                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cursor-pointer group bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 block">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Award className="h-6 w-6 text-primary" />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">TOEIC Certificate</h3>
                                        <p className="mt-1">English Proficiency Test</p>
                                    </div>

                                    {/* Bên phải */}
                                    <div className="flex flex-col items-end">
                                        <span className="text-sm text-muted-foreground">2025 - 2027</span>
                                        {/* <div className="flex items-center gap-1 mt-1">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        <span className="text-muted-foreground">Score:</span>{" "}
                        <span className="font-semibold">655/990</span>
                      </span>
                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
