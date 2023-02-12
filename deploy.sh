echo 'start deploy=====>'
docker pull registry.gitlab.com/gkc_team/metti-tech-group/metti-tech-frontend:latest
./run-mettitech-dev.sh
echo '=====>deploy success'
