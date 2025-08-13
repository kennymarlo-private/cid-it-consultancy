export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">CID IT Consultancy</h3>
                        <ul className="space-y-1">
                            <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">Services</h3>
                        <ul className="space-y-1">
                            <li><a href="/services" className="hover:text-blue-400 transition-colors">Solutions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">Resources</h3>
                        <ul className="space-y-1">
                            <li><a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
                            <li><a href="/faq" className="hover:text-blue-400 transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-white">Legal</h3>
                        <ul className="space-y-1">
                            <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} CID IT Consultancy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
