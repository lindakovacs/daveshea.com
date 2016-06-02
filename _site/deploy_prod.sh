#!/bin/bash
ssh mezzoblue.com@s22553.gridserver.com "\
cd ~/domains/daveshea.com;\
git pull;
exit;";
echo "Deployed.";
