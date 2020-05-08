#!/bin/bash

rm -rf dist
ng build --prod
aws s3 --region af-south-1 cp ./dist/learncoding-web s3://learncoding --recursive
