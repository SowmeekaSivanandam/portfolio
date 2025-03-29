<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            scroll-behavior: smooth;
        }
    </style>
</head>
<body class="bg-gray-50 pt-16"> <!-- Added pt-16 for fixed nav spacing -->
    <!-- Navigation -->
    <nav class="fixed w-full bg-white shadow-md z-10">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <a href="#" class="text-2xl font-bold text-indigo-600">JD</a>
                <div class="hidden md:flex space-x-8">
                    <a href="#hero" class="text-gray-700 hover:text-indigo-600">Home</a>
                    <a href="#about" class="text-gray-700 hover:text-indigo-600">About</a>
                    <a href="#skills" class="text-gray-700 hover:text-indigo-600">Skills</a>
                    <a href="#portfolio" class="text-gray-700 hover:text-indigo-600">Work</a>
                    <a href="#contact" class="text-gray-700 hover:text-indigo-600">Contact</a>
                </div>
                <button class="md:hidden menu-btn">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
            <!-- Mobile menu -->
            <div class="md:hidden hidden bg-white py-2 px-4">
                <a href="#hero" class="block py-2 text-gray-700 hover:text-indigo-600">Home</a>
                <a href="#about" class="block py-2 text-gray-700 hover:text-indigo-600">About</a>
                <a href="#skills" class="block py-2 text-gray-700 hover:text-indigo-600">Skills</a>
                <a href="#portfolio" class="block py-2 text-gray-700 hover:text-indigo-600">Work</a>
                <a href="#contact" class="block py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
        </div>
    </nav>
    <main>
        <!-- Hero Section -->
        <section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
            <div class="text-center px-4">
                <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-4">John Doe</h1>
                <p class="text-xl md:text-2xl text-gray-600 mb-8">Web Developer & Designer</p>
                <a href="#contact" class="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">Hire Me</a>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 px-4">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl font-bold text-center mb-12">About Me</h2>
                <div class="flex flex-col md:flex-row items-center gap-12">
                    <div class="md:w-1/3">
                        <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce" alt="Profile" class="rounded-full w-64 h-64 object-cover mx-auto shadow-lg">
                    </div>
                    <div class="md:w-2/3">
                        <p class="text-lg text-gray-700 mb-6">
                            I'm a passionate web developer with 5+ years of experience creating beautiful, functional websites. 
                            I specialize in front-end development and user experience design.
                        </p>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <h3 class="font-semibold text-gray-800">Name:</h3>
                                <p>John Doe</p>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">Email:</h3>
                                <p>john@example.com</p>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">From:</h3>
                                <p>San Francisco, CA</p>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">Phone:</h3>
                                <p>(123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="py-20 px-4 bg-white">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl font-bold text-center mb-12">My Skills</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="animate">
                        <h3 class="text-xl font-semibold mb-4">Frontend Development</h3>
                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span>HTML/CSS</span>
                                    <span>95%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 95%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span>JavaScript</span>
                                    <span>90%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span>React</span>
                                    <span>85%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="animate">
                        <h3 class="text-xl font-semibold mb-4">Backend Development</h3>
                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span>Node.js</span>
                                    <span>80%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 80%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span>Python</span>
                                    <span>75%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 75%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <span>Database</span>
                                    <span>70%</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 70%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="py-20 px-4 bg-gray-50">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl font-bold text-center mb-12">My Work</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-lg shadow-md overflow-hidden animate">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Project 1" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">E-commerce Website</h3>
                            <p class="text-gray-600 mb-4">A full-featured online store with payment integration.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">React</span>
                                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Node.js</span>
                                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">MongoDB</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden animate">
                        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d" alt="Project 2" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">Portfolio Website</h3>
                            <p class="text-gray-600 mb-4">A responsive portfolio for a creative professional.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">HTML/CSS</span>
                                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">JavaScript</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md overflow-hidden animate">
                        <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d" alt="Project 3" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">Task Management App</h3>
                            <p class="text-gray-600 mb-4">A productivity app for organizing daily tasks.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Vue.js</span>
                                <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Firebase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20 px-4 bg-white">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl font-bold text-center mb-12">Get In Touch</h2>
                <div class="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <i class="fas fa-envelope text-indigo-600 mr-4"></i>
                                <span>john@example.com</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-phone text-indigo-600 mr-4"></i>
                                <span>(123) 456-7890</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-map-marker-alt text-indigo-600 mr-4"></i>
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                        <div class="mt-8">
                            <h3 class="text-xl font-semibold mb-4">Follow Me</h3>
                            <div class="flex space-x-4">
                                <a href="#" class="text-gray-700 hover:text-indigo-600"><i class="fab fa-github text-2xl"></i></a>
                                <a href="#" class="text-gray-700 hover:text-indigo-600"><i class="fab fa-linkedin text-2xl"></i></a>
                                <a href="#" class="text-gray-700 hover:text-indigo-600"><i class="fab fa-twitter text-2xl"></i></a>
                                <a href="#" class="text-gray-700 hover:text-indigo-600"><i class="fab fa-instagram text-2xl"></i></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form id="contact-form" class="space-y-4">
                            <div>
                                <label for="name" class="block text-gray-700 mb-2">Name</label>
                                <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600">
                            </div>
                            <div>
                                <label for="email" class="block text-gray-700 mb-2">Email</label>
                                <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600">
                            </div>
                            <div>
                                <label for="message" class="block text-gray-700 mb-2">Message</label>
                                <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"></textarea>
                            </div>
                            <button type="submit" class="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-6 bg-gray-800 text-white">
            <div class="max-w-6xl mx-auto px-4 text-center">
                <p>&copy; 2023 John Doe. All rights reserved.</p>
            </div>
        </footer>
    </main>
    <script src="js/main.js"></script>
</body>
</html>