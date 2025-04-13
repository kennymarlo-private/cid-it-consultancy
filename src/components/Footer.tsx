export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 py-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">CID IT Consultancy</h3>
                        <ul className="space-y-1">
                            <li><a href="/about" className="hover:text-blue-800">About Us</a></li>
                            <li><a href="/contact" className="hover:text-blue-800">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Services</h3>
                        <ul className="space-y-1">
                            <li><a href="/offerings" className="hover:text-blue-800">What We Offer</a></li>
                            <li><a href="/services" className="hover:text-blue-800">Solutions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Resources</h3>
                        <ul className="space-y-1">
                            <li><a href="/blog" className="hover:text-blue-800">Blog</a></li>
                            <li><a href="/faq" className="hover:text-blue-800">FAQs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Legal</h3>
                        <ul className="space-y-1">
                            <li><a href="/privacy" className="hover:text-blue-800">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="hover:text-blue-800">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-8 border-t pt-4 text-sm">
                    &copy; {new Date().getFullYear()} CID IT Consultancy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
