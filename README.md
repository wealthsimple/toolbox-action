# Wealthsimple Toolbox Script

[![Github Actions Badge](https://github.com/wealthsimple/toolbox-script/actions/workflows/pipeline.yml/badge.svg)](https://github.com/wealthsimple/toolbox-script/actions)

[![Github Actions Badge](https://github.com/wealthsimple/toolbox-script/actions/workflows/update-main.yml/badge.svg)](https://github.com/wealthsimple/toolbox-script/actions)

_Not meant for public use_. This Action is based on a private package,
unavailable to the public. Only useful for private Wealthsimple projects.

## Code analysis with SonarQube

```yaml
- name: Run SonarQube analysis
  uses: wealthsimple/toolbox-script@v1
  with:
    script: toolbox.sonarqube.run()
    sonarqube_host: ${{ secrets.SONARQUBE_HOST }}
    sonarqube_token: ${{ secrets.SONARQUBE_TOKEN }}
```
