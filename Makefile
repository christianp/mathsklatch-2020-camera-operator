bookmarklet.js: bookmarklet.full.js
	@tr '\n' ' ' < $< > $@
	@cat $@
