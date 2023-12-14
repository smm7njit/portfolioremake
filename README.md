This is a redo of my midterm, using Next.js instead of standard html and css. This version aims to improve upon my last version.

My old [midterm](https://github.com/smm7njit/midterm) had the following issues written by the grader:

-Lighthouse scores are very low

-No issues (Not formatted correctly and had no comments attached)

-Playwright tests cannot run since there isn't a package.json in the
repo and playwright isn't installed

I fixed these issues in my redo by making revisions to the site after
getting Lighthouse score feedback. For the issues, I had learned that
I had been doing them incorrectly, by simply writing in a message on top
of the Commit button on the Source Control tab. By creating a commit message file for each commit, I was able to go into more detail on my commits as well as organize them better. 

With Playwright tests, I was very inexperienced with how they worked, and barely knew my way around them. I simply took a file from one of my previous assignments, the resume with css layout. I had pretty much no idea how it worked, which lead to the playwright tests not being able to run to begin with due to no package.json being installed Even if it could be run, there would be errors as the tests were written for a completely different page. But in this version, I am able to navigate through Playwright correctly, such as installing it and writing tests the correct way this time. 

Vercel Site:

https://portfolioremake-speleothems-projects.vercel.app/

My Playwright tests are located in [this file.](tests/homepage.spec.js)