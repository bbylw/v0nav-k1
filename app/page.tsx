"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface LinkItem {
  name: string
  url: string
  icon: string
  iconType: "fas" | "fab" | "far"
}

interface Category {
  id: string
  title: string
  links: LinkItem[]
}

const categories: Category[] = [
  {
    id: "ai-search",
    title: "AI搜索",
    links: [
      { name: "Google", url: "https://www.google.com", icon: "fa-google", iconType: "fab" },
      { name: "无限制AI", url: "https://unlimitedai.chat/", icon: "fa-pepper-hot", iconType: "fas" },
      { name: "openrouter", url: "https://openrouter.ai/", icon: "fa-openid", iconType: "fab" },
      { name: "websim", url: "https://websim.ai/", icon: "fa-magnifying-glass", iconType: "fas" },
      { name: "chatgpt", url: "https://chatgpt.com/", icon: "fa-google", iconType: "fab" },
      { name: "傻豆包", url: "https://www.doubao.com/chat/", icon: "fa-paw", iconType: "fas" },
      { name: "扣子空间", url: "https://space.coze.cn/", icon: "fa-shuttle-space", iconType: "fas" },
      { name: "通义千问", url: "https://chat.qwen.ai/", icon: "fa-rocketchat", iconType: "fab" },
      { name: "kimi", url: "https://kimi.moonshot.cn/", icon: "fa-moon", iconType: "far" },
      { name: "文心一言", url: "https://yiyan.baidu.com/", icon: "fa-dumpster-fire", iconType: "fas" },
      { name: "腾讯元宝", url: "https://yuanbao.tencent.com/", icon: "fa-robot", iconType: "fas" },
      { name: "minimax", url: "https://www.minimax.io/", icon: "fa-minimize", iconType: "fas" },
      { name: "z.ai", url: "https://chat.z.ai/", icon: "fa-z", iconType: "fas" },
      { name: "google AIstudio", url: "https://aistudio.google.com/", icon: "fa-robot", iconType: "fas" },
      { name: "gemini", url: "https://gemini.google.com/", icon: "fa-google-plus", iconType: "fab" },
      { name: "labs.google", url: "https://labs.google/fx/zh", icon: "fa-google-plus", iconType: "fab" },
      { name: "jules.google", url: "https://jules.google.com/", icon: "fa-google-plus", iconType: "fab" },
      { name: "copilot", url: "https://copilot.microsoft.com/", icon: "fa-windows", iconType: "fab" },
      { name: "nvidia", url: "https://build.nvidia.com/", icon: "fa-microchip", iconType: "fas" },
      { name: "claude", url: "https://claude.ai/", icon: "fa-robot", iconType: "fas" },
      { name: "chutesai", url: "https://chat.chutes.ai/", icon: "fa-robot", iconType: "fas" },
      { name: "mistral", url: "https://mistral.ai/", icon: "fa-brain", iconType: "fas" },
      { name: "groq", url: "https://groq.com/", icon: "fa-group-arrows-rotate", iconType: "fas" },
      { name: "medscape", url: "https://www.medscape.com/", icon: "fa-stethoscope", iconType: "fas" },
      { name: "heck.ai", url: "https://heck.ai/", icon: "fa-rocketchat", iconType: "fab" },
      { name: "问小白", url: "https://www.wenxiaobai.com/", icon: "fa-mask", iconType: "fas" },
      { name: "leonardo.ai绘图", url: "https://app.leonardo.ai/", icon: "fa-images", iconType: "far" },
      { name: "huggingface", url: "https://huggingface.co/", icon: "fa-face-rolling-eyes", iconType: "fas" },
      { name: "lmarena", url: "https://lmarena.ai/", icon: "fa-robot", iconType: "fas" },
      { name: "anyrouter", url: "https://anyrouter.top/", icon: "fa-robot", iconType: "fas" },
      { name: "x.ai", url: "https://x.ai/", icon: "fa-x-twitter", iconType: "fab" },
      { name: "pce计算", url: "https://ascvdpce.186404.xyz/", icon: "fa-heart-pulse", iconType: "fas" },
      { name: "t3.chat", url: "https://t3.chat/", icon: "fa-rocketchat", iconType: "fab" },
      { name: "v0", url: "https://v0.dev/", icon: "fa-v", iconType: "fas" },
      { name: "deepseek", url: "https://www.deepseek.com/", icon: "fa-rocketchat", iconType: "fab" },
      { name: "当贝AI", url: "https://ai.dangbei.com/", icon: "fa-rocketchat", iconType: "fab" },
      { name: "genspark.ai", url: "https://www.genspark.ai/", icon: "fa-rocketchat", iconType: "fab" },
      { name: "firebase.google", url: "https://firebase.google.com/", icon: "fa-code-branch", iconType: "fas" },
      { name: "kiro.dev", url: "https://kiro.dev/", icon: "fa-ghost", iconType: "fas" },
      { name: "sigmachat", url: "https://sigmabrowser.com/chat", icon: "fa-rocketchat", iconType: "fab" },
      { name: "硅基流动", url: "https://siliconflow.cn/", icon: "fa-confluence", iconType: "fab" },
      { name: "魔塔社区", url: "https://www.modelscope.cn/", icon: "fa-code-branch", iconType: "fas" },
      { name: "readdy", url: "https://readdy.ai/", icon: "fa-bolt", iconType: "fas" },
      { name: "bolt.new", url: "https://bolt.new/", icon: "fa-bolt", iconType: "fas" },
    ],
  },
  {
    id: "social",
    title: "社交媒体",
    links: [
      { name: "Facebook", url: "https://www.facebook.com", icon: "fa-facebook", iconType: "fab" },
      { name: "Twitter", url: "https://x.com/", icon: "fa-twitter", iconType: "fab" },
      { name: "推特视频下载", url: "https://twitterxz.com/", icon: "fa-x-twitter", iconType: "fab" },
      { name: "Instagram", url: "https://www.instagram.com", icon: "fa-instagram", iconType: "fab" },
      { name: "render", url: "https://render.com/", icon: "fa-draw-polygon", iconType: "fas" },
      { name: "deno", url: "https://deno.com/deploy", icon: "fa-d", iconType: "fas" },
      { name: "railway", url: "https://railway.com/", icon: "fa-archway", iconType: "fas" },
      { name: "vercel", url: "https://vercel.com/", icon: "fa-v", iconType: "fas" },
      { name: "netlify", url: "https://www.netlify.com/", icon: "fa-n", iconType: "fab" },
      { name: "savefrom", url: "https://zh.savefrom.net/", icon: "fa-share-from-square", iconType: "fas" },
      { name: "爆米花视频", url: "https://goingbus.com/", icon: "fa-n", iconType: "fab" },
      { name: "Reddit", url: "https://www.reddit.com", icon: "fa-reddit", iconType: "fab" },
      { name: "油管字幕下载", url: "https://www.downloadyoutubesubtitles.com/", icon: "fa-youtube", iconType: "fab" },
      { name: "GitHub", url: "https://github.com/", icon: "fa-github", iconType: "fab" },
      { name: "油管视频下载", url: "https://www.y2mate.com/", icon: "fa-download", iconType: "fas" },
      { name: "视频下载", url: "https://youtube.iiilab.com/", icon: "fa-download", iconType: "fas" },
      { name: "suno", url: "https://suno.com/", icon: "fa-music", iconType: "fas" },
      { name: "电影导航", url: "https://mv.186404.xyz/", icon: "fa-tv", iconType: "fas" },
    ],
  },
  {
    id: "tools",
    title: "实用工具",
    links: [
      { name: "Google翻译", url: "https://translate.google.com", icon: "fa-language", iconType: "fas" },
      { name: "短链", url: "https://d.186404.xyz/", icon: "fa-link", iconType: "fas" },
      { name: "dynv6", url: "https://dynv6.com/", icon: "fa-network-wired", iconType: "fas" },
      { name: "网速测试", url: "https://fast.com/", icon: "fa-gauge-high", iconType: "fas" },
      { name: "Cloudns", url: "https://www.cloudns.net/", icon: "fa-cloud", iconType: "fas" },
      { name: "Cloudflare", url: "https://www.cloudflare.com/zh-cn/", icon: "fa-shield-halved", iconType: "fas" },
      { name: "一个朋友", url: "https://ygpy.net/", icon: "fa-user-group", iconType: "fas" },
      { name: "谷歌笔记", url: "https://notebooklm.google/", icon: "fa-book", iconType: "fas" },
      { name: "临时邮箱", url: "https://email.ml/", icon: "fa-envelope", iconType: "fas" },
      { name: "A姐", url: "https://www.ahhhhfs.com/", icon: "fa-blog", iconType: "fas" },
      { name: "IP查询", url: "https://ip.sb/", icon: "fa-location-dot", iconType: "fas" },
      { name: "dns.he域名托管", url: "https://dns.he.net/", icon: "fa-network-wired", iconType: "fas" },
      { name: "Site域名转发", url: "https://www.site.ac/", icon: "fa-right-left", iconType: "fas" },
      { name: "Z-Library", url: "https://zh.go-to-library.sk/", icon: "fa-book-reader", iconType: "fas" },
      { name: "us.kg域名", url: "https://domain.digitalplat.org/", icon: "fa-globe", iconType: "fas" },
      { name: "Spaceship廉价域名", url: "https://www.spaceship.com/zh/", icon: "fa-rocket", iconType: "fas" },
      { name: "cursor", url: "https://www.cursor.com/", icon: "fa-i-cursor", iconType: "fas" },
      { name: "FontAwesome图标", url: "https://fontawesome.com/", icon: "fa-icons", iconType: "fas" },
      { name: "ip清洁度查询", url: "https://scamalytics.com/", icon: "fa-icons", iconType: "fas" },
      { name: "test-ipv6", url: "https://test-ipv6.com/", icon: "fa-ethernet", iconType: "fas" },
      { name: "zone/ip", url: "https://html.zone/ip", icon: "fa-sourcetree", iconType: "fab" },
      {
        name: "免费网络代理",
        url: "https://www.lumiproxy.com/zh-hans/online-proxy/proxysite/",
        icon: "fa-unlock",
        iconType: "fas",
      },
      { name: "ipcheck", url: "https://ipcheck.ing/", icon: "fa-location-dot", iconType: "fas" },
      { name: "定时任务cron-job", url: "https://console.cron-job.org/", icon: "fa-ethernet", iconType: "fas" },
      { name: "uptimerobot", url: "https://uptimerobot.com/", icon: "fa-location-dot", iconType: "fas" },
      { name: "forwardemail", url: "https://forwardemail.net/", icon: "fa-envelopes-bulk", iconType: "fas" },
      { name: "improvmx", url: "https://improvmx.com/", icon: "fa-envelopes-bulk", iconType: "fas" },
      { name: "github文件加速", url: "https://gb.w404.nyc.mn/", icon: "fa-github", iconType: "fab" },
      { name: "hostryDNS域名托管", url: "https://hostry.com/", icon: "fa-clock-rotate-left", iconType: "fas" },
      { name: "免费域名sitelutions", url: "https://www.sitelutions.com/", icon: "fa-sitemap", iconType: "fas" },
      { name: "免费域名changeip", url: "https://www.changeip.com/", icon: "fa-satellite-dish", iconType: "fas" },
      { name: "免费域名dnsexit", url: "https://dnsexit.com/", icon: "fa-users", iconType: "fas" },
      { name: "免费域名gname", url: "https://www.gname.vip/", icon: "fa-users", iconType: "fas" },
      { name: "DNS查找nslookup", url: "https://www.nslookup.io/", icon: "fa-arrows-rotate", iconType: "fas" },
      { name: "ping0", url: "https://ping0.cc/", icon: "fa-fingerprint", iconType: "fas" },
      { name: "L53免费域名", url: "https://customer.l53.net/", icon: "fa-fingerprint", iconType: "fas" },
      { name: "PDF在线工具", url: "https://tools.pdf24.org/", icon: "fa-file-pdf", iconType: "fas" },
      { name: "free-proxy", url: "http://free-proxy.cz/en/", icon: "fa-internet-explorer", iconType: "fab" },
      { name: "在线代理croxyproxy", url: "https://www.croxyproxy.rocks/_zh/", icon: "fa-unlock", iconType: "fas" },
      { name: "微信Markdown编辑器", url: "https://doocs.github.io/md/", icon: "fa-edit", iconType: "far" },
      { name: "proxysite", url: "https://www.proxysite.com/", icon: "fa-unlock", iconType: "fas" },
      { name: "serv00", url: "https://www.serv00.com/", icon: "fa-server", iconType: "fas" },
      { name: "hostuno", url: "https://www.hostuno.com/", icon: "fa-server", iconType: "fas" },
      { name: "PicGo", url: "https://github.com/Molunerfinn/PicGo", icon: "fa-cloud-arrow-up", iconType: "fas" },
      { name: "SM.MS", url: "https://smms.app/", icon: "fa-image", iconType: "fas" },
      { name: "FreeImageHost", url: "https://freeimage.host/", icon: "fa-photo-film", iconType: "fas" },
      { name: "cobalt", url: "https://cobalt.tools/", icon: "fa-youtube", iconType: "fab" },
      { name: "Windsurf", url: "https://codeium.com/", icon: "fa-code", iconType: "fas" },
      { name: "tinywow", url: "https://tinywow.com/", icon: "fa-free-code-camp", iconType: "fab" },
      { name: "付费墙", url: "https://paywallbuster.com/", icon: "fa-key", iconType: "fas" },
      { name: "PaywallHub", url: "https://g.186404.xyz/wallHub/", icon: "fa-unlock", iconType: "fas" },
      { name: "fmhy", url: "https://fmhy.net/", icon: "fa-folder-open", iconType: "far" },
      { name: "remove", url: "https://www.remove.bg/", icon: "fa-image-portrait", iconType: "fas" },
      { name: "picwish", url: "https://picwish.com/", icon: "fa-image", iconType: "far" },
      { name: "腾讯智影", url: "https://zenvideo.qq.com/", icon: "fa-video", iconType: "fas" },
      { name: "免费域名HiDNS", url: "https://www.hidoha.net/", icon: "fa-fingerprint", iconType: "fas" },
      { name: "pixabay", url: "https://pixabay.com/", icon: "fa-pix", iconType: "fab" },
      { name: "InfinityFree", url: "https://www.infinityfree.com/", icon: "fa-infinity", iconType: "fas" },
      { name: "anyvoice", url: "https://anyvoice.net/", icon: "fa-microphone", iconType: "fas" },
      { name: "fish.audio", url: "https://fish.audio/", icon: "fa-fish", iconType: "fas" },
      { name: "noizai", url: "https://noiz.ai/", icon: "fa-circle-notch", iconType: "fas" },
      { name: "海螺Ai", url: "https://hailuoai.video/", icon: "fa-file-audio", iconType: "fas" },
      { name: "desec免费域名", url: "https://desec.io/", icon: "fa-anchor", iconType: "fas" },
      { name: "lovable网站生成", url: "https://lovable.dev/", icon: "fa-shield-heart", iconType: "fas" },
      { name: "netlib免费域名", url: "https://www.netlib.re/", icon: "fa-globe", iconType: "fas" },
      { name: "zone免费域名", url: "https://zone.id/", icon: "fa-id-card-clip", iconType: "fas" },
      { name: "x10hosting免费托管", url: "https://x10hosting.com/", icon: "fa-ghost", iconType: "fas" },
      { name: "nodeloc社区", url: "https://www.nodeloc.com/", icon: "fa-hashnode", iconType: "fab" },
      { name: "same复制网站", url: "https://same.new/", icon: "fa-copy", iconType: "fas" },
      { name: "claw容器", url: "https://claw.cloud/", icon: "fa-cloud", iconType: "fas" },
      { name: "subeasy字幕", url: "https://www.subeasy.ai/zh-CN", icon: "fa-closed-captioning", iconType: "fas" },
      { name: "知识卡片", url: "https://cardify.godsbee.com/", icon: "fa-credit-card", iconType: "fas" },
      { name: "webhostmost网站托管", url: "https://www.webhostmost.com/", icon: "fa-web-awesome", iconType: "fas" },
      { name: "腾讯edgeone", url: "https://edgeone.ai/", icon: "fa-dice-one", iconType: "fas" },
      { name: "Stormkit", url: "https://www.stormkit.io/", icon: "fa-cloud", iconType: "fas" },
    ],
  },
  {
    id: "tech-news",
    title: "科技资讯",
    links: [
      { name: "TechCrunch", url: "https://www.techcrunch.com", icon: "fa-newspaper", iconType: "fas" },
      { name: "Wired", url: "https://www.wired.com", icon: "fa-bolt", iconType: "fas" },
      { name: "The Verge", url: "https://www.theverge.com", icon: "fa-laptop", iconType: "fas" },
      { name: "Ars Technica", url: "https://arstechnica.com", icon: "fa-rocket", iconType: "fas" },
      { name: "Engadget", url: "https://www.engadget.com", icon: "fa-mobile-screen", iconType: "fas" },
      { name: "科技日报", url: "https://scitechdaily.com/", icon: "fa-microscope", iconType: "fas" },
      { name: "TechRadar", url: "https://techradar.com", icon: "fa-satellite", iconType: "fas" },
      { name: "科技博客", url: "https://b.186404.xyz/", icon: "fa-blog", iconType: "fas" },
      { name: "cnbeta", url: "https://www.cnbeta.com.tw/", icon: "fa-circle-info", iconType: "fas" },
    ],
  },
  {
    id: "cloud-storage",
    title: "云存储",
    links: [
      { name: "Dropbox", url: "https://www.dropbox.com", icon: "fa-dropbox", iconType: "fab" },
      { name: "Google Drive", url: "https://drive.google.com", icon: "fa-google-drive", iconType: "fab" },
      { name: "OneDrive", url: "https://onedrive.live.com", icon: "fa-microsoft", iconType: "fab" },
      { name: "Box", url: "https://www.box.com", icon: "fa-box", iconType: "fas" },
      { name: "MediaFire", url: "https://www.mediafire.com", icon: "fa-file", iconType: "fas" },
      { name: "MEGA", url: "https://mega.nz", icon: "fa-cloud-arrow-up", iconType: "fas" },
      { name: "PikPak", url: "https://mypikpak.com/", icon: "fa-cloud", iconType: "fas" },
    ],
  },
  {
    id: "email",
    title: "电子邮箱",
    links: [
      { name: "Gmail", url: "https://mail.google.com", icon: "fa-envelope", iconType: "fas" },
      { name: "Outlook", url: "https://outlook.live.com", icon: "fa-microsoft", iconType: "fab" },
      { name: "cock邮箱", url: "https://cock.li/", icon: "fa-envelope-open", iconType: "fas" },
      { name: "disroot邮箱", url: "https://disroot.org/", icon: "fa-envelope-circle-check", iconType: "fas" },
      { name: "ProtonMail", url: "https://www.protonmail.com", icon: "fa-shield-halved", iconType: "fas" },
      { name: "QQ邮箱", url: "https://mail.qq.com", icon: "fa-qq", iconType: "fab" },
      { name: "librem邮箱", url: "https://librem.one/", icon: "fa-at", iconType: "fas" },
      { name: "临时谷歌邮箱", url: "https://www.linshigmail.com/", icon: "fa-envelopes-bulk", iconType: "fas" },
    ],
  },
]

export default function WebNavHub() {
  const [activeSection, setActiveSection] = useState("ai-search")

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map((cat) => document.getElementById(cat.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(categories[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="bg-black py-6 text-center">
        <h1 className="text-4xl font-bold text-orange-500 uppercase tracking-wider">WebNav Hub</h1>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeSection === category.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(category.id)}
                className={`text-sm transition-colors ${
                  activeSection === category.id
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="mb-16">
            <h2 className="text-2xl font-bold text-orange-500 mb-6 border-b border-zinc-800 pb-2">{category.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {category.links.map((link, index) => (
                <Card
                  key={index}
                  className="group bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 text-center h-full flex flex-col items-center justify-center min-h-[100px]"
                  >
                    <div className="text-2xl text-orange-500 mb-3 group-hover:scale-110 transition-transform duration-200">
                      <i className={`${link.iconType} ${link.icon}`}></i>
                    </div>
                    <h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors line-clamp-2 leading-tight">
                      {link.name}
                    </h3>
                  </a>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-black text-zinc-400 text-center py-6 border-t border-zinc-800">
        <p className="text-sm mb-3">© 2024 WebNav Hub. 保留所有权利。</p>
        <div className="flex justify-center gap-6 text-xs">
          <a href="#" className="hover:text-white transition-colors">
            隐私政策
          </a>
          <a href="#" className="hover:text-white transition-colors">
            使用条款
          </a>
          <a href="#" className="hover:text-white transition-colors">
            联系我们
          </a>
        </div>
      </footer>

      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
    </div>
  )
}
