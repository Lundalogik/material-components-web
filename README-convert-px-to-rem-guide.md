On `master`, run:

```bash
$ git pull --tags --rebase=false git@github.com:material-components/material-components-web.git master
$ git checkout <TAG>
$ git checkout -b releases/<TAG>
$ git cherry-pick e99619c59d4a7ff14d93352c1b0f0cd40ba2c477
```

Then run the following search-and-replace.

  1. The upstream repo assumes `1rem == 16px` while we use `1rem == 10px`, so any values using `rem` in the upstream repo needs to be multiplied by `1.6`. **Run on the `<REPO-ROOT>/packages` folder**:

```regex
# Regex find
([-+]?[0-9]*\.?[0-9]+rem)

# Regex replace
1.6*\1
```

  2. Now convert all `px`-values to `rem`. **Run on the `<REPO-ROOT>/packages` folder**:

```regex
# Regex find
([-+]?[0-9]*)([0-9])px

# Regex replace
\1.\2rem
```

  3. Update the namespace of the packages. **Run on the `<REPO-ROOT>/packages` folder**:

```
# Find
@material/

# Replace
@lime-material/
```

  4. Set the repository for all sub-packages to our fork. **Run only on files called `package.json`**:

```
# Find
https://github.com/material-components/material-components-web

# Replace
https://github.com/Lundalogik/material-components-web
```

  5. Update the name of the wrapping package. **Run only on `<REPO-ROOT>/packages/material-components-web/package.json`**:

```
# Find
"name": "material-components-web"

# Replace
"name": "lime-material-components-web"
```
