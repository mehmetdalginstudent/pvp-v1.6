import { Post } from '../types';
import { posts } from '../data/posts';

export const generateRSSFeed = (): string => {
  const baseUrl = window.location.origin;
  const now = new Date().toUTCString();

  const rssItems = posts
    .filter(post => !post.archived)
    .map(post => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${baseUrl}/blog/${post.id}</link>
        <guid>${baseUrl}/blog/${post.id}</guid>
        <description><![CDATA[${post.excerpt}]]></description>
        <category>${post.category}</category>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <author>info@pdrportal.com (PDR Portal)</author>
      </item>
    `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>PDR Portal</title>
    <link>${baseUrl}</link>
    <description>Profesyonel gelişiminiz için vaka paylaşımı ve süpervizyon platformu</description>
    <language>tr</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
    <item>
      <title>Hakkımızda</title>
      <link>${baseUrl}/about</link>
      <guid>${baseUrl}/about</guid>
      <description>PDR Portal Hakkında</description>
      <category>Pages</category>
    </item>
    <item>
      <title>İletişim</title>
      <link>${baseUrl}/contact</link>
      <guid>${baseUrl}/contact</guid>
      <description>PDR Portal İletişim</description>
      <category>Pages</category>
    </item>
    <item>
      <title>S.S.S</title>
      <link>${baseUrl}/faq</link>
      <guid>${baseUrl}/faq</guid>
      <description>Sıkça Sorulan Sorular</description>
      <category>Pages</category>
    </item>
    <item>
      <title>KVKK</title>
      <link>${baseUrl}/privacy</link>
      <guid>${baseUrl}/privacy</guid>
      <description>KVKK ve Gizlilik Politikası</description>
      <category>Legal</category>
    </item>
    <item>
      <title>Kullanım Şartları</title>
      <link>${baseUrl}/terms</link>
      <guid>${baseUrl}/terms</guid>
      <description>PDR Portal Kullanım Şartları</description>
      <category>Legal</category>
    </item>
  </channel>
</rss>`;
};