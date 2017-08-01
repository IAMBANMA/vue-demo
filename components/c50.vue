<template>
    <div class='container'>
        <h2 class='page-header'>git简要</h2>
        <div class='panel panel-default'>
            <div class="panel-heading">
                <h4 class="panel-title">•••创建新仓库</h4>
            </div>
            <div class='panel-body'>
                <p>创建新文件夹,打开,然后执行
                    <kbd>git init</kbd>
                    以创建新的git仓库.</p>
            </div>
        </div>
        <div class='panel panel-default'>
            <div class="panel-heading">
                <h4 class="panel-title">•••克隆仓库</h4>
            </div>
            <div class='panel-body'>
                <p>执行如下命令以创建一个本地仓库的克隆版本
                    <kbd>git clone /path/to/repository</kbd>
                    如果是远端服务器上的仓库,执行如下命令将在本地创建一个本地克隆版
                    <kbd>git clone username@host:/path/to/repository
                    </kbd>
                </p>
            </div>
        </div>
        <div class='panel panel-default'>
            <div class="panel-heading">
                <h4 class="panel-title">•••工作流</h4>
            </div>
            <div class='panel-body'>
                <p>你的本地仓库由git维护的三棵"树"组成.第一个是你的(工作目录),它持有实际文件;<strong>add---&gt;</strong>第二个是(缓存区),它像个缓存区域,临时保存你的改动;<strong>commit---&gt;</strong>最后是(head),指向你最近一次提交的结果.
                    <dt>•••添加与提交</dt>
                    添加是将文件改动的文件添加到缓存区,使用
                    <kbd>git add filename</kbd>
                    添加指定文件名的文件;或者通过
                    <kbd>git add *</kbd>
                    添加所有文件.这是git基本工作流程的第一步. 提交是将缓存区的内容提交到
                    <strong>head</strong>.使用命令
                    <kbd>git commit -m </kbd>"代码提交信息" ,但是还没有提交的远端仓库.</p>
            </div>
        </div>
        <div class='panel panel-default'>
            <div class="panel-heading">
                <h4 class="panel-title">•••推送改动</h4>
            </div>
            <div class='panel-body'>
                <p>你的改动现在已经在本地仓库的head中了,执行命令
                    <kbd>git push origin master
                    </kbd>将改动提交到远端仓库.(可以把master换成你想要推送的任何分支).
                    <br> 如果你还没有克隆现有仓库,并欲将你的仓库连接到某个远程服务器,你可以使用命令
                    <kbd>git remote add origin [server]
                    </kbd>添加.这样你就能够将你的改动推送到所添加的服务器上了.</p>
            </div>
        </div>
        <div class='panel panel-default'>
            <div class="panel-heading">
                <h4 class="panel-title">•••分支</h4>
            </div>
            <div class='panel-body'>
                <p>分支是用来将特性开发绝缘开来的.在你创建仓库的时候,master是默认的.在其他分支上进行开发,完成后再将它们合并到主分支上.
                    <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; feature_x
                    <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /--------------------\
                    <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; master &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \
                    <br> ---------/---------------------------\------------------>
                    <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (branch) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (merge)
                    <br> 创建一个叫做feature_x的分支,并切换过去是用命令
                    <kbd>git checkout -b feature_x
                    </kbd>
                    切换回主分支使用命令
                    <kbd>git checkout master
                    </kbd>
                    在把新建的分支删掉,使用命令
                    <kbd>git branch -d feature_x
                    </kbd>
                    除非你将分支推送到远端仓库,不然该分支别人是看不到的,使用命令
                    <kbd>git push origin [branch]</kbd>.</p>
            </div>
        </div>
        <div class='panel panel-default'>
            <div class="panel-heading">
                <h4 class="panel-title">•••更新与合并</h4>
            </div>
            <div class='panel-body'>
                <p>更新你的本地仓库至最新改动,执行命令
                    <kbd>git pull
                    </kbd>拉取远端仓库新版本,以便在你的工作目录中获取(fetch)并合并(merge)远端的改动. 使用命令
                    <kbd>git merge [branch]
                    </kbd>合并其他分支到你的当前分支. 一般git都会尝试去自动合并改动.不幸的是,自动合并并非次次都能成功,并可能导致冲突(conflicts).这时候就需要你修改这些文件来人肉合并这些冲突了.改完之后,你需要执行
                    <kbd>git add filename
                    </kbd>命令将它们标记为合并成功. 在合并改动之前,也可是使用命令
                    <kbd>git diff [source_branch] [target_branch]
                    </kbd>来查看.</p>
            </div>
        </div>
        <div class='panel panel-default'>
            <div class="panel-heading">
                <h4 class="panel-title">•••标签</h4>
            </div>
            <div class='panel-body'>
                <p>在软件发布时创建标签是被推荐的.这是个旧有概念,在SVN中也有.可以执行如下命令创建一个1.0.0的标签
                    <kbd>git tag 1.0.0 1b2e1
                    </kbd>
                    上面的1b2e1是你想要标记提交ID的前5为字符,可以使用命令
                    <kbd>git log
                    </kbd>获取提交ID.</p>
            </div>
        </div>
        <div class='panel panel-default'>
            <div class="panel-heading">
                <h4 class="panel-title">•••参考手册</h4>
            </div>
            <div class='panel-body'>
                <p>•
                    <u><a href="https://git-scm.com/book/zh/v2" target="_blank">git参考手册</a></u>(!!!很全面的教材)
                    <br> •
                    <u><a href="http://marklodato.github.io/visual-git-guide/index-en.html" target="_blank">图形化git指南</a></u>(图文并茂)</p>
            </div>
        </div>
    </div>
</template>
