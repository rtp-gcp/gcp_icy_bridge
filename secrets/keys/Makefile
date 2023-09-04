# set the default goal.
.DEFAULT_GOAL := list_docs
#.phony: list_docs gitupdate clean



list_docs:
	ls -l



gitupdate: clean
	git add .; git commit -m "update secrets/keys dir"; git push

clean:
	echo "docs: make clean"
	#-find . -name "*.backup" -print | xargs rm
	#-rm *.md
	-rm *.backup *.BACKUP *.swp *.key *.md *.json



encrypt:
	gpg --output testy.md.gpg --encrypt --recipient davisjf@gmail.com testy.md
	gpg --output keys.md.gpg --encrypt --recipient davisjf@gmail.com keys.md
	gpg --output fire_testy.json.gpg --encrypt --recipient davisjf@gmail.com fire_testy.json



decrypt:
	gpg --decrypt testy.md.gpg
	gpg --decrypt keys.md.gpg
	gpg --decrypt fire_testy.json.gpg

decrypt_tofile:
	gpg --output keys.md --decrypt keys.md.gpg
	gpg --output testy.md --decrypt testy.md.gpg
	gpg --output fire_testy.json --decrypt fire_testy.json.gpg

