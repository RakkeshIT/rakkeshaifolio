import type { StaticImageData } from "next/image";
import jobSearchCover from "../../assets/blogs/job-search-cover.png";
import pffr from "../../assets/blogs/Proof-First Fresher Resume Guide.webp";

export type BlogKit = {
    label: string;
    link: string;
};

export type BlogPost = {
    id: number;
    title: string;
    slug: string;
    description: string;
    category: string;
    tags: string[];
    author: { name: string; role: string };
    publishedAt: string;
    readingTime: string;
    coverImage: StaticImageData;
    featured: boolean;
    content: any[];
    // Optional: add { label, link } pairs to show a "Kits & Resources"
    // section at the bottom of the post. Omit or leave empty and that
    // section is automatically hidden.
    kits?: BlogKit[];
};

export const blogPosts: BlogPost[] = [
    {
        id: 1,

        title:
            "A Real-World Job Search Strategy: How to Target Companies and Get More Interview Calls",

        slug:
            "real-world-job-search-strategy-how-to-target-companies-and-get-interview-calls",

        description:
            "A practical job-search strategy for freshers and developers covering profile building, resume preparation, company targeting, daily application targets, direct HR outreach, walk-in interviews, IT park visits, and job tracking.",

        category: "Career",

        tags: [
            "Job Search",
            "Career",
            "Freshers",
            "Interview",
            "Resume",
            "Full Stack Developer",
            "Job Hunting",
        ],

        author: {
            name: "Rakkesh",
            role: "Full Stack Developer",
        },

        publishedAt: "2026-09-30",

        readingTime: "12 min read",

        coverImage: jobSearchCover,

        featured: true,

        content: [
            {
                type: "intro",

                title: "Real Solution for Job Seekers",

                content: `
If you are a fresher or a developer who is currently searching for a job, 
you may already know how difficult the process can feel.

The biggest problem is not always the lack of skills.

Many job seekers struggle because they don't know:

- Where to search for the right jobs
- Which companies to target
- How to approach companies directly
- How to contact HR
- How to use job portals effectively
- How to prepare a professional profile
- How to track their applications
- How to consistently generate interview opportunities

In this article, I am going to share the exact job-search strategy that I personally used during my career journey.

This is not a theory-based article.

These are strategies that I personally followed while searching for jobs.
        `,
            },

            {
                type: "heading",

                title: "My Job Search Success Story",

                content: `
Hey guys, this is Rakkesh, a Full Stack Developer.

I started my career journey in May 2025.

From May 2025, I continuously searched for jobs and started experimenting with different ways to approach companies, HR teams, recruiters, and job opportunities.

During that journey, I attended 30+ interviews.

Out of those 30+ interviews, I lost more than 25 interviews.

Yes, I faced a lot of rejection.

But I continued improving my skills, resume, communication, interview preparation, and most importantly, my job-search strategy.

Then came July 15, 2025.

I was selected by a US-based IT company as a MERN Developer.

Within around 45–50 days of continuously searching and applying for jobs, I successfully cracked an opportunity.

But the journey didn't stop there.

In June 2026, I lost that job.

So I had to start my job search again.

This time, I started again from July 1, 2026, using the same strategy that I had developed from my previous experience.

During July 2026, I attended 20+ interviews, including walk-in interviews.

Finally, on July 25, 2026, I joined an AI product-based company as a MERN Developer.

This second job search taught me something very important:

Getting a job is not only about applying to jobs.

You need a proper system for finding companies, targeting companies, contacting recruiters, following up, attending interviews, and tracking everything.
        `,
            },

            {
                type: "quote",

                content: `
You don't need to apply randomly to hundreds of jobs.

You need a repeatable system that helps you continuously find and approach the right companies.
        `,
            },

            {
                type: "heading",

                title: "The 3-Phase Job Search Strategy",

                content: `
I divide my job-search strategy into three major phases:

Phase 1 → Build a Proper Professional Profile

Phase 2 → Set Monthly Job Search Targets

Phase 3 → Search and Approach Companies Directly

Along with these phases, you should maintain a daily tracking system so that you know exactly what you are doing every day.
        `,
            },

            {
                type: "heading",

                title: "Phase 1: Build a Proper Professional Profile",

                content: `
Before you start aggressively applying for jobs, first make sure your professional profile is ready.

Don't start applying to hundreds of companies with an incomplete profile.

Spend the first 30 days building a strong foundation.
        `,
            },

            {
                type: "subheading",

                title: "1. Develop One Strong Skill With AI",

                content: `
Don't try to learn everything at once.

Choose one primary skill and learn how AI can be used with that skill.

For example:

- AI-Powered Full Stack Development
- Data Analytics with AI
- AI-Powered Python Development
- AI + React Development
- AI + Backend Development
- AI-Powered Automation

The goal is not simply to say:

"I know AI."

Instead, you should be able to say:

"I am a Full Stack Developer who knows how to build applications using AI-powered tools and features."

This gives your profile a clearer direction.
        `,
            },

            {
                type: "subheading",

                title: "2. Create a Proper Resume",

                content: `
Your resume depends on your experience level.

If you are a fresher, your resume should focus on proof.

I call this approach:

PFFR — Proof First Fresher Resume.

Instead of filling your resume with only:

- Objective
- Education
- Basic skills
- Certificates

Show actual proof of your ability.

For example:

- Projects
- GitHub repositories
- Live projects
- Technical skills
- Project features
- Problem-solving work
- Internships
- Practical experience

For experienced developers, I recommend a reverse-chronological resume.

Your latest and most relevant experience should be easy to find.

Your resume should answer one simple question:

"What can this candidate actually build or contribute?"
        `,
            },

            {
                type: "subheading",

                title: "3. Create a Live Resume Portfolio",

                content: `
Don't depend only on a PDF resume.

Create a personal portfolio website.

Your portfolio can include:

- About Me
- Skills
- Projects
- Live Project Links
- GitHub
- Resume
- Experience
- Certifications
- Blog
- Contact Information

Your resume tells recruiters about you.

Your portfolio can prove it.
        `,
            },

            {
                type: "subheading",

                title: "4. Create Accounts on Job Portals",

                content: `
Don't create accounts on every job website you find.

Focus on a manageable number of platforms and maintain them properly.

Some platforms you can consider are:

- LinkedIn
- Naukri
- Indeed
- Instahyre
- Foundit
- Freshersworld
- Other relevant job platforms

Around 10 platforms are more than enough if you actively maintain them.

The important thing is not the number of accounts.

The important thing is how actively you use them.
        `,
            },

            {
                type: "subheading",

                title: "5. Activate Your Professional Profile",

                content: `
Creating a LinkedIn profile is not enough.

You need to make your profile active.

For example, post something related to your field every week.

You can share:

- What you learned
- A project you built
- A technical concept
- A coding problem
- A project feature
- Your development journey
- AI tools you explored
- Technical mistakes you fixed

The goal is to show that you are actively learning and building.

Don't wait until you need a job to start posting.

Build your professional presence before you need it.
        `,
            },

            {
                type: "heading",

                title: "Your First 30-Day Target",

                content: `
During the first 30 days, focus on completing these five things:

1. Build one strong skill direction.
2. Create a professional resume.
3. Build a live portfolio.
4. Create and optimize job portal accounts.
5. Start consistently posting your learning and projects.

Once these are ready, start your aggressive company-targeting strategy.
        `,
            },

            {
                type: "heading",

                title: "Phase 2: Set Monthly Job Search Targets",

                content: `
Now comes the most important part.

Don't search for jobs randomly.

Set measurable targets.

I personally recommend setting a target of around 20 companies per day.

That means:

20 companies × 30 days = 600 companies per month.

But don't stop with online applications.

You should combine online applications with walk-in interviews and direct company visits.
        `,
            },

            {
                type: "subheading",

                title: "1. Daily Target — 20 Companies",

                content: `
Try to identify and approach around 20 relevant companies every day.

These don't have to be 20 random companies.

They should be companies that match:

- Your technology
- Your experience level
- Your location preference
- Your job role
- Your career direction

For example, if you are a MERN Developer, target companies that actually use technologies such as:

React
Node.js
Express.js
MongoDB
Next.js

Quality targeting is more useful than blindly applying everywhere.
        `,
            },

            {
                type: "subheading",

                title: "2. Attend at Least One Walk-In Interview Every Week",

                content: `
Online applications are not the only way to find opportunities.

Try to attend at least one relevant walk-in interview every week when such opportunities are available.

Walk-in interviews can help you:

- Meet recruiters directly
- Understand current hiring requirements
- Practice face-to-face interviews
- Improve communication
- Discover companies that may not appear prominently on job portals
        `,
            },

            {
                type: "subheading",

                title: "3. Visit IT Parks Every Saturday",

                content: `
If you live in an area with multiple IT companies or technology parks, use that opportunity.

For example, choose one IT park or technology area and visit it on a fixed day.

Carry multiple copies of your updated resume.

Visit relevant companies and ask whether they have openings matching your profile.

This gives you another channel for discovering opportunities beyond online applications.
        `,
            },

            {
                type: "heading",

                title: "Your Monthly Target Calculation",

                content: `
A simple target can look like this:

20 companies per day
×
30 days
=
600 company approaches

Then add:

~4 walk-in interviews per month

+
~4 IT park visits per month

This creates a large monthly job-search pipeline.

The exact number of interviews you receive will vary depending on your profile, experience, skills, location, market conditions, and company requirements.

The important thing is to maintain consistent activity.
        `,
            },

            {
                type: "heading",

                title: "Phase 3: Start Searching and Approaching Companies",

                content: `
This is where many job seekers make a mistake.

They open a job portal, click Apply, and move to the next job.

Don't depend only on the Apply button.

Use the job portal to discover the opportunity.

Then research the company and try additional ways to approach them.
        `,
            },

            {
                type: "subheading",

                title: "1. Send a Direct Email",

                content: `
If you find a relevant opening, search for the company's official contact information or recruitment email.

Then send a short and professional email.

Your email should contain:

- Who you are
- Your role
- Relevant skills
- Job you are applying for
- Resume
- Portfolio/GitHub if relevant

Keep the email short.

Recruiters don't need your entire life story inside an email.
        `,
            },

            {
                type: "subheading",

                title: "2. Contact HR or the Company",

                content: `
Sometimes company contact numbers are available through:

- Official company websites
- Career pages
- Public business profiles
- Company contact pages

If a legitimate contact number is publicly available, you can professionally ask whether they are currently hiring for your role.

Don't spam.

Be respectful and keep the conversation short.
        `,
            },

            {
                type: "subheading",

                title: "3. Check Company Career Pages Daily",

                content: `
Don't depend only on job portals.

Many companies publish openings on their own career pages.

Create a list of companies you want to work for and check their career pages regularly.

For example:

Company A → Careers

Company B → Careers

Company C → Careers

Company D → Careers

This gives you access to opportunities directly from the source.
        `,
            },

            {
                type: "subheading",

                title: "4. Visit One Technology Area and Target Multiple Companies",

                content: `
Choose one area where multiple IT companies are located.

Visit that area and identify relevant companies.

Carry your resume and ask professionally about current openings.

Instead of visiting only one company, you can potentially discover multiple opportunities in the same area.

This method requires preparation and should always be done respectfully and according to each company's visitor policies.
        `,
            },

            {
                type: "subheading",

                title: "5. Don't Stop at Job Portal Applications",

                content: `
This is one of the most important strategies in my job-search process.

Suppose you find this job on a job portal:

MERN Developer — Company XYZ

Don't simply click Apply and forget about it.

Instead:

Step 1 → Find the company name.

Step 2 → Visit the official company website.

Step 3 → Find the Careers page.

Step 4 → Check whether the same or similar role is listed.

Step 5 → Find a legitimate recruitment/contact email if publicly available.

Step 6 → Send a professional email with your resume.

Step 7 → Check whether there is a publicly listed company contact number.

Step 8 → Track the application.

The job portal becomes your discovery tool.

The company website and direct communication become additional ways to approach the opportunity.
        `,
            },

            {
                type: "heading",

                title: "Phase 4: Track Everything You Do",

                content: `
This is something I strongly recommend.

Create a job-search tracking sheet.

Don't depend on your memory.

Every day, record what you did.
        `,
            },

            {
                type: "table",

                title: "Recommended Job Tracking Columns",

                columns: [
                    "Date",
                    "Company",
                    "Role",
                    "Technology",
                    "Source",
                    "Application Method",
                    "HR Contact",
                    "Email Sent",
                    "Call Done",
                    "Interview Date",
                    "Interview Round",
                    "Status",
                    "Follow-up Date",
                    "Notes",
                ],

                rows: [
                    [
                        "30-Sep-2026",
                        "Company XYZ",
                        "MERN Developer",
                        "React + Node.js",
                        "LinkedIn",
                        "Email + Career Page",
                        "Available",
                        "Yes",
                        "Yes",
                        "02-Oct-2026",
                        "Round 1",
                        "Scheduled",
                        "01-Oct-2026",
                        "Prepare React questions",
                    ],
                ],
            },

            {
                type: "heading",

                title: "Why Tracking Is So Important",

                content: `
Imagine applying to 300 companies.

After two weeks, you may not remember:

- Which companies you contacted
- Who replied
- Which companies rejected you
- Which companies asked you to follow up
- Which interviews you attended
- Which companies are still waiting for a response

A tracking sheet solves this problem.

It turns your job search into a measurable process.
        `,
            },

            {
                type: "heading",

                title: "Your Job Search Should Work Like a Pipeline",

                content: `
Think of your job search like a development pipeline.

Companies Found
↓
Jobs Identified
↓
Applications Sent
↓
Direct Emails
↓
HR Contact
↓
Interview Scheduled
↓
Technical Round
↓
Final Round
↓
Offer

If one stage is weak, improve that stage.

For example:

If you apply to 500 companies but receive very few interview calls → improve your resume, profile, targeting, and application quality.

If you receive interviews but fail technical rounds → improve technical preparation.

If you reach final rounds but don't receive offers → analyze interview performance, communication, projects, and role-specific preparation.

Don't simply keep applying without analyzing the results.
        `,
            },

            {
                type: "heading",

                title: "The Biggest Mistake Job Seekers Make",

                content: `
The biggest mistake is expecting one application to change everything.

You may apply to a company today and never receive a response.

That's normal.

Don't measure your entire career based on one rejection.

During my own journey, I lost 25+ interviews.

But those rejections didn't mean I was incapable of getting a job.

They became feedback.

I continued improving and continued searching.

Eventually, I got the opportunity I was looking for.
        `,
            },

            {
                type: "heading",

                title: "My Recommended Job Search System",

                content: `
If I were starting my job search again from zero, I would follow this system:

DAY 1–30
→ Build skill
→ Build resume
→ Build portfolio
→ Create job profiles
→ Start LinkedIn activity

EVERY DAY
→ Target relevant companies
→ Search job portals
→ Check company career pages
→ Send direct applications
→ Contact relevant recruiters
→ Update tracking sheet

EVERY WEEK
→ Attend relevant walk-in interviews
→ Review application results
→ Improve resume/profile
→ Publish one useful LinkedIn post
→ Practice interviews

EVERY MONTH
→ Review total companies approached
→ Review interviews received
→ Review rejection reasons
→ Identify weak areas
→ Improve the strategy
        `,
            },

            {
                type: "heading",

                title: "My Job Search Toolkit",

                content: `
To make this process easier, I am also preparing some resources that you can use during your job search.
        `,
            },

            {
                type: "resource",

                title: "My Resume Template",

                description:
                    "A practical resume structure designed for developers and freshers.",

                link: "https://drive.google.com/file/d/15IzTCctj0w-ZJJGyFJx-vJX8jJ3uCKRN/view?usp=sharing",
            },

            {
                type: "resource",

                title: "Email Templates",

                description:
                    "Ready-to-customize professional email templates for contacting recruiters and companies.",

                link: "https://drive.google.com/file/d/1NydCOQ97-Q8P33SnW-e5dCbdwmpLpfGG/view?usp=sharing",
            },

            {
                type: "resource",

                title: "Job Searching Guide",

                description:
                    "A practical guide for finding companies, targeting opportunities, contacting recruiters, and tracking applications.",

                link: "https://drive.google.com/file/d/1zUouS-XqVG_iVvUQLpYpw7XtPPghoJXc/view?usp=sharing",
            },

            {
                type: "heading",

                title: "Final Thoughts",

                content: `
If you are currently searching for a job, don't depend on luck.

Build a system.

Build your skills.

Build your resume.

Build your portfolio.

Target companies.

Contact companies directly.

Attend relevant interviews.

Track everything.

Learn from every rejection.

And keep improving.

My own journey included 30+ interviews, more than 25 interview rejections, a successful MERN Developer opportunity in July 2025, another job search after losing that role in June 2026, 20+ interviews during my July 2026 search, and finally joining an AI product-based company as a MERN Developer on July 25, 2026.

If you follow a consistent and structured approach, you can create significantly more opportunities for yourself.

Your first goal shouldn't be:

"I need one job."

Your first goal should be:

"I need to build a system that continuously creates relevant job opportunities."
        `,
            },

            {
                type: "cta",

                title: "Want More Job Search Resources?",

                content: `
I regularly share content about Full Stack Development, AI tools, career growth, job searching, interview preparation, and developer learning.

You can follow my channels for more practical resources, templates, courses, webinars, and college tech talks.
        `,

                links: [
                    {
                        label: "YouTube",
                        url: "https://www.youtube.com/@VairaaCoders",
                    },
                    {
                        label: "Instagram",
                        url: "https://www.instagram.com/vairaacoders?stkn=bnQ5NTIycTNyenMw",
                    },
                    {
                        label: "LinkedIn",
                        url: "https://www.linkedin.com/in/rakkeshit/",
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        title:
            "PFFR: A Proof-First Fresher Resume That Shows What You Can Actually Build",
        slug:
            "pffr-proof-first-fresher-resume-format-for-developers",
        description:
            "A practical Proof-First Fresher Resume (PFFR) approach for freshers and entry-level developers, covering ATS-friendly structure, project-focused resume writing, technical proof, skills, internships, achievements, and targeted resumes.",
        category: "Career",
        tags: [
            "PFFR",
            "Resume",
            "Fresher Resume",
            "ATS Resume",
            "Career",
            "Freshers",
            "Resume Tips",
            "Projects",
            "Full Stack Developer",
            "Job Search",
            "Interview"
        ],
        author: {
            name: "Rakkesh",
            role: "Full Stack Developer",
        },
        publishedAt: "2026-10-08",
        readingTime: "10 min read",
        coverImage: pffr,
        featured: true,
        content: [
            {
                type: "intro",

                title: "Stop Saying You Have Skills. Start Proving Them.",

                content: `
If you are a fresher or an entry-level developer looking for your first software development opportunity, creating a resume can be confusing.

You may know HTML, CSS, JavaScript, React, Node.js, Python, databases, APIs, or AI tools.

But there is one important question a recruiter may have:

"What have you actually built with these skills?"

Many fresher resumes focus heavily on:

- Career objectives
- Education
- Skill lists
- Certifications
- Generic statements

The problem is that these things don't always prove that you can actually use your technical knowledge.

This is why I created the idea of:

PFFR — Proof-First Fresher Resume.

The principle is simple:

Don't ask recruiters to believe that you have technical skills.

Show them evidence that you have applied those skills.
            `,
            },

            {
                type: "heading",

                title: "What Is PFFR?",

                content: `
PFFR stands for Proof-First Fresher Resume.

It is a project-driven and ATS-friendly resume approach designed specifically for freshers and entry-level candidates.

The main idea is to move the focus from:

"I know these technologies."

to:

"I have used these technologies to build something."

A strong fresher resume should make it easy for both an ATS and a recruiter to understand:

- Who you are
- What role you are targeting
- What technologies you know
- What you have built
- How you applied those technologies
- What technical problems you solved
- What evidence you can provide
            `,
            },

            {
                type: "quote",

                content: `
Don't ask the recruiter to believe that you have skills.

Show evidence that you applied them.
            `,
            },

            {
                type: "heading",

                title: "Why I Created the PFFR Approach",

                content: `
One common problem I see in fresher resumes is that candidates list many technologies without showing how they used them.

For example:

"React, Node.js, MongoDB, Express, JavaScript."

This tells the recruiter what the candidate claims to know.

But it doesn't answer:

What did you build?

Did you create APIs?

Did you connect a database?

Did you implement authentication?

Did you deploy the project?

Did you solve a real problem?

A proof-first resume tries to answer these questions.

Instead of simply listing skills, it connects skills with projects and practical implementation.
            `,
            },

            {
                type: "heading",

                title: "The PFFR Resume Structure",

                content: `
A recommended PFFR resume structure is:

Header
↓
Professional Summary
↓
Featured Projects
↓
Technical Skills
↓
Internship Experience
↓
Achievements & Technical Activities
↓
Certifications
↓
Education
↓
Languages

The most important change is that strong projects appear near the top of the resume.

For a fresher, projects can provide practical evidence when professional experience is limited.
            `,
            },

            {
                type: "subheading",

                title: "1. Header",

                content: `
Your header should immediately tell the recruiter who you are and how they can contact you.

Include:

- Full name
- Target role
- City / Location
- Phone number
- Professional email
- LinkedIn
- GitHub
- Portfolio

For example:

Rakkesh Kumar
Full Stack Developer
Chennai, Tamil Nadu, India

Email
Phone
LinkedIn
GitHub
Portfolio

Avoid unnecessary information such as a complete residential address.

Keep the contact information simple and easy to read.
            `,
            },

            {
                type: "subheading",

                title: "2. Professional Summary",

                content: `
Keep your professional summary short.

Around 3–4 lines is usually enough.

Your summary should answer:

Who are you?

What technologies do you work with?

What have you built?

What role are you targeting?

For example:

"Full Stack Developer with hands-on experience building web applications using React, Next.js, Node.js, Express and MongoDB. Experienced in developing REST APIs, authentication systems, database-driven applications and AI-powered features."

Avoid generic statements such as:

"I am a hardworking and passionate individual looking for a challenging opportunity."

Instead, focus on your technical identity and evidence.
            `,
            },

            {
                type: "heading",

                title: "Featured Projects — The Core of PFFR",

                content: `
For freshers, projects are one of the strongest ways to demonstrate technical ability.

Feature your 2–3 strongest and most relevant projects.

Each project should answer four questions:

1. What problem were you solving?

2. What did you build?

3. How did you build it?

4. What was the result?

A strong project description should include:

- Project name
- Role
- Technology stack
- Problem or goal
- Solution
- Technical implementation
- Result or impact
- GitHub link
- Live demo link

Don't write:

"Created a React project."

Write something like:

"Built a task management platform using React and Node.js, integrated REST APIs for task creation and updates, and implemented user authentication."
            `,
            },

            {
                type: "subheading",

                title: "The PFFR Project Writing Formula",

                content: `
Use this formula when writing project bullets:

Action Verb + What You Built + Technology + Result / Impact

Examples:

Built a full-stack task management platform using React, Node.js and MongoDB with REST API integration.

Developed an AI-powered chatbot using an LLM API and implemented contextual responses through a Node.js backend.

Created reusable React components and integrated REST APIs to support dynamic application workflows.

The important part is not using impressive words.

The important part is explaining what you actually did.
            `,
            },

            {
                type: "subheading",

                title: "Weak vs Strong Project Description",

                content: `
Weak:

"Worked on a React project."

Strong:

"Built reusable React components for a task management platform and integrated REST APIs for task creation and updates."

Weak:

"Created an AI chatbot."

Strong:

"Built an AI-powered chatbot using an LLM API and implemented contextual responses through a Node.js backend."

The strong versions provide technical evidence.

That is the core idea behind PFFR.
            `,
            },

            {
                type: "heading",

                title: "Technical Skills",

                content: `
Your technical skills section should be easy for an ATS and recruiter to scan.

Group your skills into categories.

For example:

Languages:
JavaScript, TypeScript, Python

Frontend:
HTML, CSS, React, Next.js

Backend:
Node.js, Express.js, NestJS, REST APIs

Database:
MongoDB, PostgreSQL, Prisma

AI / ML:
LLM APIs, AI Integration, RAG

Tools:
Git, GitHub, Postman

Only list technologies that you can actually explain during an interview.

Do not add a technology just because it appears in a job description.
            `,
            },

            {
                type: "subheading",

                title: "Core Technical Skills",

                content: `
Don't limit your resume to technology names.

Technical concepts are also important.

Examples:

- OOP
- REST APIs
- Authentication
- Database Design
- Debugging
- Testing
- Git
- Problem Solving
- DSA
- DBMS
- System Design Fundamentals

These concepts can demonstrate your understanding beyond simply knowing a framework.
            `,
            },

            {
                type: "heading",

                title: "Internship Experience",

                content: `
If you have an internship or relevant professional training experience, include it.

Use reverse chronological order.

For each experience, focus on:

Action
+
Work
+
Technology
+
Result

Instead of:

"Worked on frontend development."

Write:

"Developed reusable React components and integrated REST APIs to support application workflows."

Your bullets should describe actual work you performed.

Never invent responsibilities or achievements.
            `,
            },

            {
                type: "heading",

                title: "Achievements & Technical Activities",

                content: `
Use this section to show additional technical proof.

Examples include:

- LeetCode problems solved
- HackerRank achievements
- Coding competitions
- Hackathons
- Open-source contributions
- Technical leadership
- Developer communities
- Technical projects

For example:

"Solved 250+ LeetCode problems."

or:

"Contributed to an open-source React component library."

Only include achievements that are real and verifiable.

Don't add weak participation items just to make the resume longer.
            `,
            },

            {
                type: "heading",

                title: "Certifications",

                content: `
Certifications are optional.

Prioritize certifications that are relevant to your target role.

For example:

- React
- JavaScript
- Python
- Cloud
- Database
- AI
- Backend development

Avoid filling your resume with unrelated webinar or participation certificates.

A strong project can often provide more practical evidence than a collection of generic certificates.
            `,
            },

            {
                type: "heading",

                title: "Education",

                content: `
Education is still important for freshers.

Include:

- Degree
- Institution
- Location
- Graduation year
- CGPA / Percentage when it strengthens your profile

For example:

Master of Computer Applications
University Name
Chennai, India
2025
CGPA: 8.2

For candidates with multiple qualifications, use reverse chronological order.
            `,
            },

            {
                type: "heading",

                title: "ATS-Friendly Resume Design",

                content: `
A good resume should not only contain strong content.

It should also be easy for an ATS to parse.

Recommended design:

- Single-column layout
- Standard headings
- Standard fonts
- Selectable text
- Consistent formatting
- Clear section hierarchy
- Natural keywords
- Simple bullet points
- White background

Avoid:

- Skill bars
- Charts
- Decorative graphics
- Profile photos
- Logos
- Complex tables
- Multiple columns
- Important text inside images

Your resume should be designed for readability first.
            `,
            },

            {
                type: "heading",

                title: "One Page or Two Pages?",

                content: `
For most freshers, one page should be the default.

Use one page when you can communicate your strongest evidence clearly.

A second page can make sense when you have:

- Meaningful internships
- Strong technical projects
- Significant achievements
- Relevant professional experience

Don't add a second page simply to make your resume look bigger.

More content does not automatically mean a stronger resume.
            `,
            },

            {
                type: "heading",

                title: "PFFR Resume as JSON Data",

                content: `
If you are building a portfolio, resume builder, or developer profile platform, the PFFR structure can also be represented as structured JSON.

This makes the resume content reusable across:

- Portfolio websites
- Resume builders
- Job platforms
- Developer profiles
- PDF resume generators
- AI resume tools

A simplified structure looks like this:
            `,
            },

            {
                type: "code",

                language: "json",

                content: `
{
  "personal": {
    "name": "Your Name",
    "targetRole": "Full Stack Developer",
    "location": "Chennai, Tamil Nadu, India",
    "email": "your@email.com",
    "phone": "+91XXXXXXXXXX",
    "linkedin": "https://linkedin.com/in/username",
    "github": "https://github.com/username",
    "portfolio": "https://yourportfolio.com"
  },

  "summary": {
    "text": "Full Stack Developer with hands-on experience building web applications using React, Node.js and MongoDB."
  },

  "projects": [
    {
      "title": "Project Name",
      "role": "Full Stack Developer",
      "technologies": [
        "React",
        "Node.js",
        "MongoDB"
      ],
      "problem": "Describe the problem.",
      "solution": "Describe what you built.",
      "implementation": [
        "Built frontend",
        "Developed REST APIs",
        "Implemented authentication",
        "Connected database"
      ],
      "impact": "Describe the actual result.",
      "github": "https://github.com/username/project",
      "liveDemo": "https://project.vercel.app"
    }
  ],

  "technicalSkills": {
    "languages": [
      "JavaScript",
      "TypeScript",
      "Python"
    ],
    "frontend": [
      "HTML",
      "CSS",
      "React",
      "Next.js"
    ],
    "backend": [
      "Node.js",
      "Express",
      "NestJS"
    ],
    "database": [
      "MongoDB",
      "PostgreSQL"
    ],
    "ai": [
      "LLM APIs",
      "AI Integration",
      "RAG"
    ],
    "tools": [
      "Git",
      "GitHub",
      "Postman"
    ]
  },

  "experience": [],

  "achievements": [],

  "certifications": [],

  "education": [],

  "languages": []
}
            `,
            },

            {
                type: "heading",

                title: "Target Your Resume to the Job",

                content: `
PFFR is not a single fixed resume.

You can create targeted versions for different roles without changing the truth of your profile.

For a MERN / Full Stack Developer role, emphasize:

React
Next.js
Node.js
Express
MongoDB
REST APIs

For a React / Frontend Developer role, emphasize:

React
Next.js
TypeScript
UI
Performance
Accessibility

For a Backend Developer role, emphasize:

Node.js
NestJS
APIs
Databases
Authentication
Testing

For an AI Full Stack Developer role, emphasize:

LLM APIs
AI Integrations
RAG
Backend
React
AI Projects

The goal is not to create fake experience.

The goal is to highlight the most relevant parts of your real experience.
            `,
            },

            {
                type: "heading",

                title: "Never Fake Proof",

                content: `
This is one of the most important rules of PFFR.

Never invent:

- Projects
- Metrics
- Skills
- Certifications
- Achievements
- Work experience
- Technical contributions

If you built it, show it.

If you deployed it, link it.

If you solved coding problems, show the actual number.

If you contributed to open source, show the contribution.

If you don't have a measurable result, don't create a fake number.

A resume should make your real ability visible.

It should not create an artificial version of your career.
            `,
            },

            {
                type: "quote",

                content: `
Skills tell recruiters what you know.

Projects prove that you can use them.

Achievements provide additional evidence.
            `,
            },

            {
                type: "heading",

                title: "The PFFR Quality Checklist",

                content: `
Before sending your resume, check the following:

☐ Name and contact details are clear

☐ Target role is visible

☐ Summary is concise and relevant

☐ 2–3 strongest projects are featured

☐ Each project explains what was built

☐ Technical implementation is clear

☐ Technical skills use standard keywords

☐ Internship is included when applicable

☐ Achievements contain real technical proof

☐ Certifications are relevant

☐ Education is complete

☐ No fake metrics or skills

☐ Single-column layout is used

☐ No unnecessary graphics

☐ Formatting is consistent

☐ Resume is targeted to the job description

☐ Final PDF contains selectable text
            `,
            },

            {
                type: "heading",

                title: "The Real Purpose of a Fresher Resume",

                content: `
Your resume is not supposed to tell your entire life story.

Its job is to create enough confidence for a recruiter to take the next step.

For a fresher, the strongest evidence can come from:

Projects
+
Technical Skills
+
GitHub
+
Live Applications
+
Internships
+
Technical Achievements

This creates a much stronger story than simply listing technologies.
            `,
            },
            {
                type: "heading",

                title: "PFFR Guide PDF",

                content: `
To make this process easier, I am also preparing some resources that you can use make your PFFR Resume.
        `,
            },

            {
                type: "resource",

                title: "PFFR Guide",

                description:
                    "A practical resume structure designed for developers and freshers.",

                link: "https://drive.google.com/file/d/1Op8Fa4P4FZEC_FB1E1J0WpjPof7gAVhg/view?usp=sharing",
            },

            {
                type: "heading",

                title: "Final Thoughts",

                content: `
If you are a fresher searching for your first developer job, don't focus only on making your resume look attractive.

Focus on making your resume believable.

Build real projects.

Deploy them.

Maintain your GitHub.

Explain your technical decisions.

Show what you actually built.

Use your resume to connect your skills with evidence.

That is the idea behind PFFR:

Proof-First Fresher Resume.

Don't just tell recruiters what you know.

Show them what you can build.
            `,
            },

            {
                type: "cta",

                title: "Want More Developer Career Resources?",

                content: `
I regularly share practical content about Full Stack Development, AI tools, career growth, job searching, interview preparation, resume building, and developer learning.

Follow my channels for more practical resources, templates, projects, and career guidance.
            `,

                links: [
                    {
                        label: "YouTube",
                        url: "https://www.youtube.com/@VairaaCoders",
                    },
                    {
                        label: "Instagram",
                        url: "https://www.instagram.com/vairaacoders",
                    },
                    {
                        label: "LinkedIn",
                        url: "https://www.linkedin.com/in/rakkeshit/",
                    },
                ],
            },
        ],
    },
];