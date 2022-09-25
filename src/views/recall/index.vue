<template>
  <section class="recall-title">
    <h1>回溯算法</h1>
  </section>
  <section class="recall-content">
    <div style="text-align:center">
      <p style="margin-top:10px text-align:center">之所以会有想法写这个算法分享一下，也是得益与学习了labuladong的算法教程，大家可以搜索他的教程，真的很棒</p>
      <p>labuladong用的java语法，我用js翻译过来，主要学习他的核心思想</p>
      <p>那么接下来我们学习一下回溯算法</p>
    </div>
    <div style="margin-top:30px">
      <h1>
        回溯算法解题套路框架:
      </h1>
      本文解决几个问题：<br />

      回溯算法是什么？解决回溯算法相关的问题有什么技巧？<br />如何学习回溯算法？<br />回溯算法代码是否有规律可循？<br />

      其实回溯算法和我们常说的 DFS 算法非常类似，本质上就是一种暴力穷举算法。<br />回溯算法和 DFS 算法的细微差别是：回溯算法是在遍历「树枝」，DFS 算法是在遍历「节点」，本文就是简单提一下，等你看到后文 图论算法基础
      时就能深刻理解这句话的含义了。<br /><br />

      废话不多说，直接上回溯算法框架，解决一个回溯问题，实际上就是一个决策树的遍历过程，站在回溯树的一个节点上，你只需要思考 3 个问题：<br /><br />

      <p style="color: #e04c05;">
        1、路径：也就是已经做出的选择。<br />
        2、选择列表：也就是你当前可以做的选择。<br />
        3、结束条件：也就是到达决策树底层，无法再做选择的条件。<br /><br />
      </p>

      如果你不理解这三个词语的解释，没关系，我们后面会用「全排列」和「N 皇后问题」这两个经典的回溯算法问题来帮你理解这些词语是什么意思，现在你先留着印象。<br />


      代码方面，回溯算法的框架：<br />

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28165%2C225%2C225%2C1%29&t=vscode&wt=none&l=javascript&width=735&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=result%2520%253D%2520%255B%255D%250A%250A%250Adef%2520backtrack%28%25E8%25B7%25AF%25E5%25BE%2584%25EF%25BC%258C%25E9%2580%2589%25E6%258B%25A9%25E5%2588%2597%25E8%25A1%25A8%29%25EF%25BC%259A%250A%250Aif%2520%25E6%25BB%25A1%25E8%25B6%25B3%25E6%259D%25A1%25E4%25BB%25B6%25EF%25BC%259A%250A%2520%2520%2520result.add%28%25E8%25B7%25AF%25E5%25BE%2584%29%250A%2520%2520%2520return%250A%250Afor%2520%25E9%2580%2589%25E6%258B%25A9%2520in%2520%25E9%2580%2589%25E6%258B%25A9%25E5%2588%2597%25E8%25A1%25A8%250A%2520%250A%2520%2520%2520%2520%25E5%2581%259A%25E9%2580%2589%25E6%258B%25A9%250A%2520%2520%2520%2520backtrack%28%25E8%25B7%25AF%25E5%25BE%2584%25EF%25BC%258C%25E9%2580%2589%25E6%258B%25A9%25E5%2588%2597%25E8%25A1%25A8%29%250A%2520%2520%2520%2520%25E6%2592%25A4%25E9%2594%2580%25E9%2580%2589%25E6%258B%25A9%250A"
        style="width: 735px; height: 448px; border:0; transform: scale(1); overflow:hidden;"
        sandbox="allow-scripts allow-same-origin">
      </iframe>
      <p> 其核心就是 for 循环里面的递归，在递归调用之前「做选择」，在递归调用之后「撤销选择」，特别简单。</p>
      <p>什么叫做选择和撤销选择呢，这个框架的底层原理是什么呢？下面我们就通过「全排列」这个问题来解开之前的疑惑，详细探究一下其中的奥妙！</p>
      
    </div>
  </section>
</template>
  
<style lang="scss" scoped>
.recall-title {
  font-size: 18px;
  text-align: center;
}

.recall-content {
  line-height: 32px;
  font-size: 16px;
}
</style>
  