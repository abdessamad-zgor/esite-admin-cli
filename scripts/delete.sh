#!/bin/bash

#remove the dir from gh and local memory

sudo rm -r $1
gh repo delete hornedout-law/$(basename $1) --confirm