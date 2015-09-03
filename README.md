# quiz1

You are presented with the following problems:

1. Make a function that returns double the value passed into it.

  [problems/double.js](problems/double.js)

2. Make a function that returns whether or not the value is even.

  [problems/is-even.js](problems/is-even.js)

3. Make a function that returns the file extension of a given filename (without
  the `.`), or false if there was not file extension.

  [problem/file-extension.js](problems/file-extension.js)

# Prerequisites

You must have `git` installed. You can use a GUI tool like [GitHub Desktop](https://desktop.github.com/)
or [SourceTree](https://www.sourcetreeapp.com/). I recommend learning the
command-line myself, especially those wanting to do professional web development.
If you want to learn the command-line version, feel free to hit me up on slack
on the #git channel.

You must have `node` and `npm` installed on your machine. You can install `node`
directly from [here](https://nodejs.org/), but let me know if you want to know
how to better manage your node installation by sending me a message on the #node slack channel.

Once that's done, you'll want to fork this repo to your own. In the top right
of this page, there should be a `Fork` button. Do that and fork it to your
personal account. This is where you will do most of your development work.

Once you have it forked to your account, clone the repo to your computer. If
you're using the GitHub Deskop client, you should be able to navigate the menus
to clone your newly created repo to your computer. If you want to do it the
command-line way, in your forked version of the repo, copy the repo url from
the right hand side of the page. Then in your terminal, navigate to your projects
folder, and type `git clone https://github.com/{your username here}/quiz1.git`
then `cd quiz1`.

Whether or not you opened the terminal before, now you need to and navigate to
the project directory. On a Mac, you can do this by opening up the terminal and
opening up the finder to the location of your project. In the terminal, type
`cd ` (that's a space after the `cd`) and drag your quiz1 folder from the finder
window into your terminal window. It will auto-complete the path to your directory.
Now press enter.

Next, type `npm test` to run the tests. At this point, all of them will fail
and will spit nasty errors at you. You just need to open up the files in the
`problems` directory and add the code necessary to make the tests pass!

You can run `npm test` as many times as you want, and it will give you the
results of the tests. Keep fixing your code to make the functions do what they're
supposed to.

Once your done and you have all your tests running and passing, you'll want to
commit your code. In the command-line, enter `git add .` to stage all of your
changes and `git commit -m 'I fixed the tests'` to commit those staged changes.
After your done, run `git push` to push to your repository.

After you've got your code pushed up, you need to submit a pull request. On the
quiz1 repo page under your account, Click on the Pull Requests button in the
right sidebar. Click on Create Pull Request and make sure that dgm-ria-fall-2015/quiz1
repo is selected as the base, and yours as the compare fork. You should see
a list of code differences.

Once the Pull Request is created, I'll review them as needed. Note that these
are open and can be viewed by anyone. I'm not going to stop you from viewing
and using others' code, but you'll be doing yourself a great disservice if you
don't stop to figure out why things work the way they do. You'll be seeing and
using other people's code every day, but you need to know what parts are good
and what parts are garbage, or how to fix other people's code. Asking why
people did things the way they did is a great way to collaborate and learn
new ways of doing things.
