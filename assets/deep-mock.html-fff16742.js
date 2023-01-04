import{_ as k,W as d,X as m,$ as t,a0 as a,Z as n,a1 as s,a2 as l,E as e}from"./framework-72c45ff9.js";const b={},v=n("h1",{id:"deep-mocking",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#deep-mocking","aria-hidden":"true"},"#"),s(" Deep Mocking")],-1),h=n("h2",{id:"problem",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#problem","aria-hidden":"true"},"#"),s(" Problem")],-1),f=n("p",null,[s("You have a deeply nested API, like the "),n("code",null,"browser"),s(" object in webextensions, which requires you to call it like this:")],-1),w=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getActiveTabs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"await"),s(" browser"),n("span",{class:"token punctuation"},"."),s("tabs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"query"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" active"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onBeforeRedirect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  browser`),n("span",{class:"token punctuation"},"."),s("webRequest"),n("span",{class:"token punctuation"},"."),s("onBeforeRedirect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addListener"),n("span",{class:"token punctuation"},"("),s("callback"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    urls`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token comment"},"// ..."),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" browser"),n("span",{class:"token punctuation"},"."),s("webRequest"),n("span",{class:"token punctuation"},"."),s("onBeforeRedirect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeListener"),n("span",{class:"token punctuation"},"("),s("callback"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h2",{id:"solution",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#solution","aria-hidden":"true"},"#"),s(" Solution")],-1),g=n("p",null,[s("By using "),n("code",null,"deepMock<T>(name, autoCleanup=true)"),s(" you can easily create mocks for the above scenario.")],-1),x=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" Browser "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'webextension-polyfill'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" deepMock "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vitezilla'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("browser"),n("span",{class:"token punctuation"},","),s(" mockBrowser"),n("span",{class:"token punctuation"},","),s(" mockBrowserNode"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"deepMock"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("Browser"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'browser'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token punctuation"},"{"),s(" browser"),n("span",{class:"token punctuation"},","),s(" mockBrowser"),n("span",{class:"token punctuation"},","),s(" mockBrowserNode "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" afterEach"),n("span",{class:"token punctuation"},","),s(" beforeEach"),n("span",{class:"token punctuation"},","),s(" describe"),n("span",{class:"token punctuation"},","),s(" expect"),n("span",{class:"token punctuation"},","),s(" it"),n("span",{class:"token punctuation"},","),s(" vi "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vitest'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" mockBrowser"),n("span",{class:"token punctuation"},","),s(" mockBrowserNode "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./browser'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" getActiveTabs"),n("span",{class:"token punctuation"},","),s(" onBeforeRedirect "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./web-extension'"),n("span",{class:"token punctuation"},";"),s(`

vi`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'webextension-polyfill'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" browser "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./browser'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" browser"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"describe"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'WebExtension Helpers'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"beforeEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" mockBrowserNode"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"enable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token function"},"afterEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" mockBrowserNode"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"verifyAndDisable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token function"},"describe"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'getActiveTabs()'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"it"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'should return active tabs'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" tabs "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(" id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
      mockBrowser`),n("span",{class:"token punctuation"},"."),s("tabs"),n("span",{class:"token punctuation"},"."),s("query"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"expect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" active"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"andResolve"),n("span",{class:"token punctuation"},"("),s("tabs"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token function"},"expect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"getActiveTabs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toEqual"),n("span",{class:"token punctuation"},"("),s("tabs"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token function"},"describe"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onBeforeRedirect()'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"it"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'should register a listener and return a handle to remove the listener again'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" listener "),n("span",{class:"token operator"},"="),s(" vi"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fn"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      mockBrowser`),n("span",{class:"token punctuation"},"."),s("webRequest"),n("span",{class:"token punctuation"},"."),s("onBeforeRedirect"),n("span",{class:"token punctuation"},"."),s("addListener"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"expect"),n("span",{class:"token punctuation"},"("),s("listener"),n("span",{class:"token punctuation"},","),s(" expect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"anything"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"const"),s(" removeListener "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"onBeforeRedirect"),n("span",{class:"token punctuation"},"("),s("listener"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      mockBrowser`),n("span",{class:"token punctuation"},"."),s("webRequest"),n("span",{class:"token punctuation"},"."),s("onBeforeRedirect"),n("span",{class:"token punctuation"},"."),s("removeListener"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"expect"),n("span",{class:"token punctuation"},"("),s("listener"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token function"},"removeListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=l('<div class="hint-container note"><p class="hint-container-title">Note</p><p>If you want to mock <code>webextension-polyfill</code>, please take a look at <a href="/webextension"><code>@vitezilla/webextension</code></a>.</p></div><h2 id="more-details" tabindex="-1"><a class="header-anchor" href="#more-details" aria-hidden="true">#</a> More Details</h2><p><code>deepMock&lt;T&gt;(...)</code> expects a type parameter specifying the interface to be mocked.</p><p><code>deepMock&lt;T&gt;(...)</code> expects two parameters:</p><ul><li>A <code>name</code> used for error messages</li><li>An optional <code>autoCleanup</code> boolean (defaults to true).</li></ul><p>Use <code>autoCleanup=true</code> if you create the mock instance within your <code>test()</code>, <code>it()</code> or <code>beforeEach()</code> block to automatically verify the mocks and disable them after the test has finished. Since this is a very common use-case, it&#39;s the default is <code>true</code>.</p><ul><li>Verify means: If your mock expectation has not been fullfilled, the test will fail.</li><li>Disabling means: An exception will be thrown if the mocked instance (proxy) has been used after disabling.</li></ul><p><code>deepMock&lt;T&gt;(...)</code> returns an array with 3 items in it:</p><ol><li>The proxy instance (i.e. the object your logic will use).</li><li>A <code>VitezillaDeep&lt;T&gt;</code> mock builder. This is used to set up your mocks during tests.</li><li>A <code>VitezillaNode</code>, which is for some rare situations where you need more control. In most cases you can ignore this.</li></ol>',9),T=l(`<h2 id="vitezilladeep" tabindex="-1"><a class="header-anchor" href="#vitezilladeep" aria-hidden="true">#</a> VitezillaDeep</h2><p>The mock builder auto-completes the public properties of the interface you supplied via the type parameter of <code>deepMock&lt;T&gt;(...)</code>. This works deeply.</p><p>Additionally, each nested node has the following methods available:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// With this, you can simple specify a value to use during the test.</span>
<span class="token function-variable function">mock</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token comment">// This allows using the property without actually specifying its value.</span>
<span class="token function-variable function">mockAllow</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token comment">// Same as above, but prepares a method call. I.e. use this on a method instead.</span>
<span class="token function-variable function">mockAllowMethod</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token comment">// Used internally. Shows the path of the builder.</span>
mockPath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function A(R,E){const u=e("CodeTabs"),r=e("Tabs"),o=e("RouterLink");return d(),m("div",null,[v,h,f,t(u,{id:"9",data:[{title:"my-webextension.ts"}]},{tab0:a(({title:c,value:p,isActive:i})=>[w]),_:1},8,["data"]),y,g,t(r,{id:"20",data:[{title:"browser.ts"},{title:"web-extension.spec.ts"}]},{tab0:a(({title:c,value:p,isActive:i})=>[x]),tab1:a(({title:c,value:p,isActive:i})=>[_]),_:1},8,["data"]),B,n("p",null,[s("If you want to know more about what you can do with the expect calls, check out "),t(o,{to:"/core/expectations.html"},{default:a(()=>[s("Expectations")]),_:1}),s(".")]),T,n("p",null,[s("There are additional methods available for methods. Check out "),t(o,{to:"/core/expectations.html"},{default:a(()=>[s("Expectations")]),_:1}),s(".")])])}const N=k(b,[["render",A],["__file","deep-mock.html.vue"]]);export{N as default};