
        // Car Data
        const carData = [
            {
                id: 1,
                name: "BMW 3 Series",
                price: "$45,990",
                year: 2023,
                mileage: "10,500 mi",
                transmission: "Automatic",
                category: "luxury",
                image: "/api/placeholder/400/250"
            },
            {
                id: 2,
                name: "Toyota Camry",
                price: "$27,490",
                year: 2023,
                mileage: "5,200 mi",
                transmission: "Automatic",
                category: "sedan",
                image: "/api/placeholder/400/250"
            },
            {
                id: 3,
                name: "Honda CR-V",
                price: "$32,790",
                year: 2022,
                mileage: "18,300 mi",
                transmission: "Automatic",
                category: "suv",
                image: "/api/placeholder/400/250"
            },
            {
                id: 4,
                name: "Ford Mustang GT",
                price: "$52,990",
                year: 2023,
                mileage: "8,100 mi",
                transmission: "Manual",
                category: "sports",
                image: "/api/placeholder/400/250"
            },
            {
                id: 5,
                name: "Audi Q5",
                price: "$49,890",
                year: 2022,
                mileage: "14,700 mi",
                transmission: "Automatic",
                category: "luxury",
                image: "/api/placeholder/400/250"
            },
            {
                id: 6,
                name: "Tesla Model 3",
                price: "$42,990",
                year: 2023,
                mileage: "6,800 mi",
                transmission: "Automatic",
                category: "sedan",
                image: "/api/placeholder/400/250"
            },
            {
                id: 7,
                name: "Jeep Wrangler",
                price: "$38,490",
                year: 2022,
                mileage: "22,400 mi",
                transmission: "Automatic",
                category: "suv",
                image: "/api/placeholder/400/250"
            },
            {
                id: 8,
                name: "Porsche 911",
                price: "$115,990",
                year: 2023,
                mileage: "3,200 mi",
                transmission: "Automatic",
                category: "sports",
                image: "/api/placeholder/400/250"
            }
        ];

        // Display Cars
        function displayCars(category = 'all') {
            const carGrid = document.getElementById('carGrid');
            carGrid.innerHTML = '';
            
            const filteredCars = category === 'all' 
                ? carData 
                : carData.filter(car => car.category === category);
            
            filteredCars.forEach(car => {
                const carCard = document.createElement('div');
                carCard.className = 'car-card';
                carCard.innerHTML = `
                    <img src="${car.image}" alt="${car.name}" class="car-image">
                    <div class="car-info">
                        <h3 class="car-name">${car.name}</h3>
                        <p class="car-price">${car.price}</p>
                        <div class="car-details">
                            <span>${car.year}</span>
                            <span>${car.mileage}</span>
                            <span>${car.transmission}</span>
                        </div>
                        <button class="car-btn">View Details</button>
                    </div>
                `;
                carGrid.appendChild(carCard);
            });
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Display all cars initially
            displayCars();
            
            // Set up filter buttons
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    // Filter cars
                    const category = this.getAttribute('data-filter');
                    displayCars(category);
                });
            });
            
            // Set up testimonial slider
            const dots = document.querySelectorAll('.slider-dot');
            const slides = document.querySelectorAll('.testimonial-slide');
            
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    // Hide all slides
                    slides.forEach(slide => {
                        slide.style.display = 'none';
                        slide.classList.remove('active');
                    });
                    
                    // Remove active class from all dots
                    dots.forEach(d => d.classList.remove('active'));
                    
                    // Show selected slide and activate dot
                    slides[index].style.display = 'block';
                    slides[index].classList.add('active');
                    this.classList.add('active');
                });
            });
            
            // Display first testimonial
            slides.forEach((slide, index) => {
                if (index !== 0) {
                    slide.style.display = 'none';
                }
            });
            
            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Form submission
            const contactForm = document.querySelector('.contact-form');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            });
            
            // Add interactivity to car cards
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('car-btn')) {
                    const carName = e.target.closest('.car-card').querySelector('.car-name').textContent;
                    alert(`You are viewing details for ${carName}. In a real application, this would open a detailed page.`);
                }
            });
        });
    