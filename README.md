<p align="center">
  <a href="https://github.com/wealthsimple/toolbox-script/actions">
    <img alt="toolbox-script status" src="https://github.com/wealthsimple/toolbox-script/workflows/pipeline/badge.svg">
  </a>
</p>

# Wealthsimple Toolbox Script

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
