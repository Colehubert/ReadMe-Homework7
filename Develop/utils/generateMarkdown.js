
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license.includes("MIT")){
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  }
  if (license=="GPL v2"){
    return "https://img.shields.io/badge/License-GPL_v2-blue.svg"
  }
  if (license.includes("Apache")){
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  }
  if (license=="GPL v3"){
    return "https://img.shields.io/badge/License-GPLv3-blue.svg"
  }
  if (license.includes("BSD")){
    return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.includes("MIT")){
    return "https://opensource.org/licenses/MIT"
  }
  if (license=="GPL v2"){
    return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
  }
  if (license.includes("Apache")){
    return "https://opensource.org/licenses/Apache-2.0"
  }
  if (license=="GPL v3"){
    return "https://www.gnu.org/licenses/gpl-3.0"
  }
  if (license.includes("BSD")){
    return "https://opensource.org/licenses/BSD-3-Clause"
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==""||!license) return "";
  const licenselink = renderLicenseLink(license);
  const licensebadge = renderLicenseBadge(license);
  return `[![${license}](${licensebadge})](${licenselink})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //renderLicenseBadge(data.license);
  const licensesection = renderLicenseSection(data.license);
  return `# ${data.title}
  ----------------
  ## table of Contents
  -----------------------
  -[Description](#description)
  -[Usage](#usage)
  -[Installation](#installation)
  -[License](#license)
  -[Contributing](#contributing)
  -[Questions](#questions)

### Description
-------------------
${data.description}

### Usage
-----------
${data.usage}

### Installation
-------------------
${data.installation}

### License
-------------
${data.license}
${licensesection}


### Contributing
-------------------
${data.contributing}

### Contact Information
-------------------------
### Github: https://github.com/Colehubert/${data.github}
#### Email: ${data.email}

`;
}

module.exports = generateMarkdown;
