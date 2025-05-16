// 1. Responsive Navigation Menu
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menuToggle');
  const navList = document.querySelector('nav ul');

  toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // 2. Dynamic Footer Content
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;

  // 3. Courses Array
  const courses = [
    { courseId: 'CSE 110', name: 'Intro to Programming', credits: 2, type: 'CSE', completed: true },
    { courseId: 'CSE 111', name: 'Programming with Functions', credits: 2, type: 'CSE', completed: true },
    { courseId: 'CSE 210', name: 'Programming with Classes', credits: 2, type: 'CSE', completed: false },
    { courseId: 'CSE 212', name: 'Data Structures', credits: 2, type: 'CSE', completed: false },
    { courseId: 'WDD 130', name: 'Web Fundamentals', credits: 2, type: 'WDD', completed: true },
    { courseId: 'WDD 230', name: 'Web Frontend Development I', credits: 2, type: 'WDD', completed: false },
    { courseId: 'WDD 330', name: 'Web Frontend Development II', credits: 2, type: 'WDD', completed: false },
    { courseId: 'WDD 331', name: 'Advanced CSS', credits: 2, type: 'WDD', completed: false },
  ];

  // 4. Render Courses Function
  const courseContainer = document.getElementById('courseList');
  const totalCreditsDisplay = document.getElementById('totalCredits');

  function renderCourses(filteredCourses) {
    courseContainer.innerHTML = ''; // Clear existing

    let totalCredits = 0;

    filteredCourses.forEach(course => {
      totalCredits += course.credits;

      const card = document.createElement('div');
      card.className = `course-card ${course.type.toLowerCase()} ${course.completed ? 'completed' : ''}`;
      card.innerHTML = `
        <h3>${course.courseId}</h3>
        <p>${course.name}</p>
        <p>Credits: ${course.credits}</p>
        <p>${course.completed ? '✅ Completed' : '📚 In Progress'}</p>
      `;
      courseContainer.appendChild(card);
    });

    totalCreditsDisplay.textContent = `Total Credits: ${totalCredits}`;
  }

  // 5. Filter Buttons
  document.getElementById('allBtn').addEventListener('click', () => {
    renderCourses(courses);
  });

  document.getElementById('cseBtn').addEventListener('click', () => {
    renderCourses(courses.filter(course => course.type === 'CSE'));
  });

  document.getElementById('wddBtn').addEventListener('click', () => {
    renderCourses(courses.filter(course => course.type === 'WDD'));
  });

  // 6. Initial Load
  renderCourses(courses);
});