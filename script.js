// スライドイン アニメーション
// 下からスライドイン


// 【超重要点】
// inline要素 (インライン要素)には、「transform」プロパティーは効かない！！
// →「display: inline-block;」などを指定してあげる必要あり！！



window.addEventListener('DOMContentLoaded', function() {

  // 下からスライドイン
  gsap.utils.toArray('.js-slideIn-element').forEach(function(target){
    gsap.fromTo(target,{y:100},{y:0,scrollTrigger:{  // ここ、「y」ではなく「yPercent」にしても良い。
      trigger:target,
      start:'top 75%',
      toggleActions:'play none none reverse',
      // markers:true,
    }});
  });

  // 横からスライドイン
  gsap.utils.toArray('.js-trimming-animation').forEach(function(target){
    gsap.fromTo(target,{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',ease:'power3.out',duration:1.5,scrollTrigger:{
      trigger:target,
      start:'top 90%',
      toggleActions:'play none none reverse',
      // markers:true,
    }})
  });

})
