const cvData = {
    name: "RICHARD SANCHEZ",
    title: "MARKETING MANAGER",
    profile: "Dynamic and strategic Marketing Manager with over 6 years of experience in digital campaigns, brand management, and driving market growth.",
    contact: [
      "+123-456-7890",
      "sanchez@example.com",
      "123 New Street, New York, USA"
    ],
    education: [
      "2017–2019: MSc Marketing – NYU",
      "2015–2017: BBA Business – State University"
    ],
    skills: ["SEO", "Digital Marketing", "Google Ads", "Leadership", "Communication"],
    languages: ["English", "Spanish", "French"],
    experience: [
      "Marketing Director – Studio Creative (2022–Present)",
      "Digital Marketing Manager – BrightTech (2020–2022)",
      "Marketing Assistant – Nova Group (2018–2020)"
    ],
    references: [
      "Emilia Davis – CEO at BrightTech",
      "Marco Rivera – Director at StudioPro"
    ]
  };
  
  function renderCV() {
    document.getElementById("cv-name").textContent = cvData.name;
    document.getElementById("cv-title").textContent = cvData.title;
    document.getElementById("cv-profile").textContent = cvData.profile;
  
    renderList("contact-list", cvData.contact);
    renderList("education-list", cvData.education);
    renderList("skills-list", cvData.skills, "skills");
    renderList("languages-list", cvData.languages);
    renderList("experience-list", cvData.experience, "experience");
    renderList("reference-list", cvData.references);
  }
  
  function renderList(id, data, editableType = null) {
    const ul = document.getElementById(id);
    ul.innerHTML = "";
    data.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = item;
      if (editableType) {
        li.onclick = () => editItem(editableType, index);
      }
      ul.appendChild(li);
    });
  }
  
  function editItem(type, index) {
    const newValue = prompt("Yeni məlumat:", cvData[type][index]);
    if (newValue) {
      cvData[type][index] = newValue;
      renderCV();
    }
  }
  
  function editProfile() {
    const newText = prompt("Profil məlumatını dəyiş:", cvData.profile);
    if (newText) {
      cvData.profile = newText;
      renderCV();
    }
  }
  
  function addExperience() {
    const newExp = prompt("Yeni iş təcrübəsi:");
    if (newExp) {
      cvData.experience.push(newExp);
      renderCV();
    }
  }
  
  function addSkill() {
    const newSkill = prompt("Yeni bacarıq:");
    if (newSkill) {
      cvData.skills.push(newSkill);
      renderCV();
    }
  }
  
  renderCV();
  