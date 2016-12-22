#!/usr/bin/env python
# -*- coding: utf8 -*-
# main @ Python
# Functions: go git
# Created By HavenShen on 2016-03-23,Version 0.1

import sys, os, time, subprocess, random

file_name = 'bug.md'
file_path = '/Users/liuruibin/git_workspace/angularjs-learning/'


def check_file():
    if not os.path.exists(file_path + file_name):
        f = open(file_path + file_name, 'w')
        f.write(str(time.time()) + '\n')
        f.close()


def add_file_line():
    f = open(file_path + file_name, 'a+')
    f.write(str(time.time()) + '\n')
    f.close()


def git_add():
    cmd = ['git', 'add', '.']
    p = subprocess.Popen(cmd, cwd=file_path)
    print p.wait()


def git_commit():
    centext = "'upload bug info - " + str(time.time()) + "'"
    cmd = ['git', 'commit', '-m', centext]
    p = subprocess.Popen(cmd, cwd=file_path)
    print p.wait()


def git_push():
    cmd = ['git', 'push', '-u', 'origin', 'master']
    p = subprocess.Popen(cmd, cwd=file_path)
    print p.wait()


def cmd_list():
    cmd_list = []
    cmd_list.append("git add .")
    cmd_list.append("git commit -m 'upload bug info - " + str(time.time()) + "'")
    cmd_list.append("git push -u origin master")
    return cmd_list


def cmd_go():
    cmd_str_list = cmd_list()
    for cmd_go in cmd_str_list:
        subprocess.call(cmd_go, shell=True)


def file_handle():
    check_file()
    add_file_line()
    # time.sleep(random.randint(0, 360))  # overtrue 所说的情怀 不需要可注释
    # cmd_go()
    git_add()
    git_commit()



if __name__ == "__main__":
    # and new line 
    file_handle()
    # push github
    git_push()
    print 'done.'
