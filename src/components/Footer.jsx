import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="py-4 px-4 bg-card bg-primary/20 border-t border-border mt-12">
                <p className="text-center text-muted-foreground text-sm">
                    &copy; {new Date().getFullYear()} Kirtirajsinh Parmar.co. All rights reserved.
                </p>
            </footer>

            {/* Floating Back to Top Button */}
            <a
                href="#hero"
                className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-foreground animate-bounce hover:text-primary  hover:bg-foreground font-bold transition-colors shadow-md"
            >
                <ArrowUp size={20} />
            </a>
        </>
    );
};
