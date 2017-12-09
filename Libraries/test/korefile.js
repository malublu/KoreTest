let project = new Project('test', __dirname);

if (platform === Platform.Windows) {
	project.addFile('windows/**');
	project.addIncludeDir('windows');
} else if (platform === Platform.Linux) {
	project.addFile('linux/**');
	project.addIncludeDir('linux');
} else if (platform === Platform.OSX) {
	project.addFile('osx/**');
	project.addIncludeDir('osx');
}

resolve(project);