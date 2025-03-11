# Mellon — Keep your secrets

Mellon is a password manager designed to improve personal and business cybersecurity. We expect it to be a successful product because of market differentiation closing existing gaps in competitor products and technical innovations behind it’s functionality.

For a brief description check [the slides for incubators](/mellon-for-incubators.pdf).

## What the context is

### Market

![Current market shares distribution map[8]](/mellon/1.png)

Current market shares distribution map[8]

The European password management market demonstrated 28% growth rate in 2019—2024. The demand for password management solutions in Europe is rising significantly due to:

- Increasing cyber threats and data breaches, driving individuals and organisations to prioritise digital security.
- Stringent regulatory frameworks such as the General Data Protection Regulation (GDPR) have heightened the need for robust password management to ensure compliance and protect sensitive information.
- The shift towards remote work has increased the number of online accounts and devices, necessitating secure password practices.

![Password management market considered to be quite competitive according to the Mordor Intelligence’s password management industry analytical report[3]](/mellon/2.png)

Password management market considered to be quite competitive according to the Mordor Intelligence’s password management industry analytical report[3]

Global password management market also offers a lot of opportunities. On the one hand, analysts forecast the global market growth from 14.3%[2] to 27.5%[3] yearly reaching $8 billion by 2030. On the other hand, it remains quite competitive and without dominant players[3] resulting in some tiny apps having hundreds of thousands USD revenue[1]. Despite of 38% of the current revenue shared in North America[8], reports show 30% projected growth rate in Pacific Asia[3] due to digital transformation and growing number of SMEs in the region[9], who face challenges in safeguarding sensitive information.

![Predicted market growth tempo map[3]](/mellon/3.png)

Predicted market growth tempo map[3]

This makes Asia and Pacific password management market expected to grow at the fastest CAGR over the forecast period. The market is driven by the growing number of small and medium-sized businesses in the region. Furthermore, an increasing number of technology users and continuously evolving infrastructure contribute to driving the market.

![Normalising response rate from [Security.org](http://Security.org)’s annual report[4] gives such a distribution of methods for managing multiple internet passwords](/mellon/4.png)

Normalising response rate from [Security.org](http://Security.org)’s annual report[4] gives such a distribution of methods for managing multiple internet passwords

In Portugal, the cybersecurity market is projected to grow by 7.75% annually between 2025 and 2029, reaching $239 million by 2029[5]. Despite this growth, Portugal faces a significant shortage of cybersecurity professionals, with a 30% job vacancy rate in the sector[6]. Password managers cover only 25%[4] of potential users considering indirect competitors: memorisation, paper or digital notes and browser storages. Mellon fills these gaps providing a solution for these individuals and SMEs who cannot afford dedicated security teams.

![Personal market is growing, but business market is growing even faster[4]](/mellon/5.png)

Personal market is growing, but business market is growing even faster[4]

### Competitors features

![Screenshot 2025-01-29 at 16.22.53.png](/mellon/6.png)

[Our market research](https://docs.google.com/spreadsheets/d/1TRoU6Lo783eqLC8biEb5_IVea5ASCDCUHBcOjGHFZaQ/edit?gid=1009754274#gid=1009754274) shows, that digital security tools often compromise on usability, transparency, or innovation. Mellon addresses gaps identified in over 30 password management solutions, including [Bitwarden](https://bitwarden.com/), [LastPass](https://www.lastpass.com/), and [1Password](https://1password.com/). We compared these products by the following factors:

- Open-source. Having entire codebase published on a public share so that any user is able to maintain their own working instance of the entire service.
- Cross-platform passkey synchronisation. Users are able to manage passkeys securely across OS or browser platforms like Chrome, iOS or Windows.
- Token generation. Time-based tokens, based [on RFC 6238](https://datatracker.ietf.org/doc/html/rfc6238), that users can input for authentication. Push notifications for approving or rejecting login requests. QR codes to transfer 2FA secrets securely between devices.
- Local-first. Seamless synchronisation of data across devices without conflicts, and possibility to be used in offline scenarios.
- Global security standards. Declared alignment with [ISO/IEC 27001](https://www.iso.org/standard/27001), [NIST CSF 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf), [GDPR](https://gdpr-info.eu/), [CSA STAR](https://cloudsecurityalliance.org/star), [CCPA](https://oag.ca.gov/privacy/ccpa), [SOC 3](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-3) or other standards.
- Post-quantum cryptography. Usage of modern algorithms secure against attacks from both classical and quantum computers.
- Accessibility. Accommodations for users with disabilities: screen reader support, keyboard navigation, etc.
- End-to-end encryption. Usage of encryption keys above the data on various devices to ensure that all synchronised data is encrypted locally and decrypted only on trusted devices. Encrypted backups can be restored without exposing plaintext keys. Data remains private even on servers.
- Zero-knowledge architecture. Data remains completely private even for the service provider.
- Biometric authentication. Support for fingerprints, facial or voice recognition and other methods.
- Emergency access. Users can grant access to trusted contacts in extremal cases.
- Password sharing. Ability to securely share passwords or credentials within teams or with family members.
- Real-time collaboration. Multiple users work in the same vault simultaneously with access and rights dependance on their roles.
- Delegation. Share an access without exposing a master password to someone.
- Data recovery options. Mechanisms for recovering data in case of master password loss or other corruptions: recovery keys, backup codes.
- Backup locations. Local, cloud, or hybrid backup solutions.
- Passwordless methods support. Possibility to use public key instead of a password on sites with this feature enabled.
- Data residency options. Ability to choose where data is stored to comply with local regulations or to rely on local legal acts.
- Decoy passwords. Features to mislead unauthorised access attempts.
- Data obfuscation. Innovative methods to protect data from brute-force attacks.
- Adaptive security. Product, scenarios and security measures adaptation based on on user behaviour or variable threats possibilities in different contexts.
- Password monitoring. Product monitors user vaults to identify weak, reused, or compromised passwords, providing proactive security alerts, including usage of dark web leaks.
- Alarmed mode aka temporarily hide sensitive data. Temporarily remove or hide sensitive data from their devices and restore it later. For examples when accessing the app under duress or during travels.
- Email aliases integration. An opportunity not only to set unique password for a service, but also hide your real email behind generated one — to minimise the consequences of services breaches or unreliable contacts usage.
- Password rotation. Automatically change credentials for various services.

Despite strong competitors on an established yet fragmented market[3], none of them are ready for the upcoming post-quantum future with new threats and opportunities it brings to us. No single product effectively combines other features and monetisation options Mellon’s going to offer. This results into Mellon’s principles and features set presented below and enabling him to stand out.

Publicly available passwords management users researches[4] also provide few in-depth insights on some popular options:

- [Bitwarden](https://bitwarden.com/) is mainly known for its transparency and open-source approach.
- [1Password](https://1password.com/) is praised for its ease of use, family plans, and travel mode.
- [Dashlane](https://www.dashlane.com/) is liked for its wide range of features like VPN services.
- [NordPass](https://nordpass.com/) is valued for its simple interface and biometric login support.

### Competitors numbers

![Screenshot 2025-01-29 at 16.23.21.png](/mellon/7.png)

In the very same analysis, we captured statistics on possible usage and revenue. The method we used:

- We use [SensorTower](https://app.sensortower.com/) to evaluate mobile applications statistics, and [SimilarWeb](https://www.similarweb.com/) — for websites.
- We consider category personal, if an App is featured in individual rankings, like Productivity, and suppose category business for Business rankings.
- We mostly filtered apps with more than 5.000 monthly installs.

Meanwhile, researches highlight, that only eight percent of users changed companies in 2024[4]. Numerous users cited an “if it ain’t broke, don’t fix it” approach. They picked password managers based on familiarity or solid reputations and remained with providers who proved reliable without issues or breaches over time.

That is good for retention, but limits an opportunity to leverage competitors’ users for growth. The best option here is to use direct rival’s breaches. Second option is to create export tools to help users migrating from the rival products. Many people also said they rely on recommendations from others or look for expert reviews when choosing password managers.

## How Mellon differs

### Principles

**Open-source**. Benefits:

- Building trust. Open-source code allows users to see exactly how the software operates, ensuring there are no hidden vulnerabilities, backdoors, or malicious practices. Users, independent experts, and the developer community can audit the code for potential flaws.  Of course, minority of users will try to audit the code by themselves, but such a transparency evokes confidence in the security of the product in all the categories of the users.
- Community help. If any imperfections found during the audits mentioned above, people interested in our product might be easily report it or even suggest their own code implementations with fixes. Open-source nature might inspire external developers to create plugins, extensions, or integrations, broadening functionality.
- Fostering good code. Being open-sourced means higher levels of expectations from the code quality you ship — because not only your peers, but potentially everyone might see and evaluate your solutions. This approach also forces the product's main branch to be kept working correctly at all times.
- Attracting talent. Open-source projects attract skilled developers who are passionate about contributing to impactful and innovative projects. It makes future hirings easier, and the whole engineering team — more motivated.
- Dual-licensing model. That’s our opportunity to leverage open-source transparency while monetising premium features and enterprise-level services.

More on the benefits is surprisingly good written in the article by Google[10].

**Local-first**. Benefits:

- Enhanced user experience. Users can access and manage their passwords even without internet connectivity. This is critical in areas with unreliable networks or during travel. Operations like password retrieval and updates are handled locally, offering reduced latency due to no server round-trips. Passwords can be synchronised in the background when a network is available.
- Increased security and privacy. Users retain control of their sensitive password data, which is stored primarily on their devices rather than centralised servers. This reduces the risk of mass data breaches. Synchronisation across devices can use end-to-end encryption, ensuring that even if data is intercepted during transfer, it remains inaccessible to unauthorised parties.
- Scalability and cost efficiency. The shift of the computational and storage load to user devices lead to the infrastructure cost savings. Decentralised data management improves system reliability by eliminating single points of failure in the infrastructure.
- Building trust. The approach aligns with the principles of data sovereignty and ethical software development, appealing to privacy-conscious users. Usage of open protocols and a local-first philosophy resonate well with communities advocating for user empowerment and decentralised technologies.

**Standards-alignment**. We’ll design and implement Mellon keeping in mind:

- [OWASP Top Ten](https://owasp.org/www-project-top-ten/). A regularly updated list of the most critical web application security risks.
- [GDPR Data Protection by Design](https://gdpr-info.eu/art-25-gdpr/). A core principle of the EU's General Data Protection Regulation that requires organisations to consider data privacy throughout the entire engineering process.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/). The Web Content Accessibility Guidelines are organised around four main principles: perceivable, operable, understandable and robust — making website suitable for wider range of users with disabilities.
- [Portugal's National Strategy for Cyberspace Security](https://portugaldigital.gov.pt/en/accelerating-digital-transition-in-portugal/get-to-know-the-digital-transition-strategies/national-strategy-for-cyberspace-security/). This strategy focuses on strengthening Portugal's cybersecurity posture, including components like the promotion of cybersecurity awareness and education or the support for cybersecurity research and innovation.

This will bring Portugal and European Union markets compliance from the start, as well as user perspective benefits.

### Innovations

Mellon is technology-driven product and incorporates following knowledge-intensive innovations.

**Post-quantum cryptography**. Utilises algorithms such as Kyber, Dilithium or SPHINCS+ to safeguard against quantum computing future threats. These algorithms and their implementations are supported by Open Quantum Safe and have been standardised by US National Institute of Standards and Technology, NIST. Kyber is a key encapsulation mechanism while Dilithium is a digital signature scheme and SPHINCS+ is a stateless hash-based signature scheme. They are able to substitute RSA, ECC or ECDSA approaches.

**Passwordless authentication**. Supports [FIDO2](https://fidoalliance.org/fido2/), [WebAuthn](https://www.w3.org/TR/webauthn-3/) and [CTAP2](https://fidoalliance.org/specs/fido-v2.0-ps-20190130/fido-client-to-authenticator-protocol-v2.0-ps-20190130.html) protocols and standards stack for secure, password-free access. Integrates biometric APIs such as BiometricPrompt and LocalAuthentication. In this approach, we use public-key cryptography instead of passwords. The private key stays on your device, while websites store the public key. When logging in, your device proves it has the private key through a cryptographic challenge. FIDO also ensures basic interoperability across various ecosystems.

Besides being implemented by some competitors, we consider it as an innovation because of statistics. In 2024 adoption was only 15% among those under age 30 and 10% overall[7] or even remains 5.5%[4] depending on the researches.

**Local-first zero-knowledge architecture**. Employs CRDTs for reliable synchronisation across devices. Implements end-to-end encryption with the Web Crypto API (AES-GCM). Provides QR codes for secure key distribution and encrypted local backups with optional cloud replication.

**Adaptive AI-driven security**. Using AI models to detect unusual login behaviours, device changes, and geolocation anomalies. Adjusts dynamically to mitigate unauthorised access risks.

**Zero-knowledge proofs for authentication**. Succinct Non-Interactive Arguments of Knowledge (zk-SNARKs) is a technique that ensures the server can verify a device's identity without needing access to the plaintext credentials or encryption keys. During authentication, the client generates a proof that they know the correct password hash or key derived from it. Than the server verifies this proof without learning the password itself. Adds a layer of authentication without exposing sensitive data.

Might further be used for such problems as to validate end-to-end encryption, to verify password strength, to prove that a shared password or key is valid or to confirm that a password matches a breached hash. Used in conjunction with Shamir’s Secret Sharing it might prove that recovery shares were distributed and used correctly.

**Shamir’s secret sharing**. It’s planned to be implemented for secure account recovery via trusted contacts. It’s a cryptographic scheme that enables splitting a secret into multiple shares, where a predefined number of shares is required to reconstruct the original secret. Nearly like horcruxes in the Harry Potter series.

### Monetisation

![Screenshot 2024-12-13 at 23.17.06.png](/mellon/8.png)

Mellon’s pricing positioning will remain competitive:

- Free cloud tariff. With many users juggling multiple screens, the ability to synchronise password access and autofill between devices is imperative[4]. Most vaults offer this functionality, but some work more smoothly than others. So, we’ll try to provide a genuinely useful free tier that builds trust, with premium features clearly adding value: advanced encryption, unlimited password storage, etc.
- Free self-hosting. Any user might be able to download, set up and maintain their own instance of our product.
- Individual cloud subscription. Based price is €4/month, aligning with the lower spectrum of competitors like [Dashlane](https://www.dashlane.com/), €5/month, and [LastPass](https://www.lastpass.com/), €3/month. Password managers offer additional services and security bundles at higher-priced tiers. The ability to package password management with VPN access, dark web monitoring, encrypted document storage, and biometric authentication was appealing to one-stop cybersecurity shoppers[4].
- Family cloud subscription. We expect it to worth €10/month making it profitable to acquire in case of shared use by three or more users. Family-oriented pricing or group discounts resonate well in a culture that values close-knit familial or friendship ties.
- Corporate cloud subscription or contract. We’ll try to revolutionise this category by setting a single subscription price of €100/month, regardless of the number of employees in the company or the proportion of users among them. Here we copy [Basecamp Pro Unlimited](https://basecamp.com/pricing) model which made this SaaS company quite successful on their market and undercut enterprise-tier competitors like [1Password](https://1password.com/) and [Keeper Security](https://www.keepersecurity.com/en_GB/) with their €4–€7 per user/month basic tiers.
- Dedicated subscription. When the entire infrastructure is automatically created and configured at the user's request, and a private Mellon replica is launched. Users of such a tariff will be sure that their computing power and data are isolated from others - and for this, they will not have to configure anything manually. €10/month for regular users or €200/month for enterprises.

Meanwhile, we’re going to combine this pricing with various mechanics to improve monetisation metrics:

- Timely upgrade prompts. Notifications to suggest premium upgrades when free users encounter limits or try to use advanced features, with limited-time discounts.
- Feature trials. Free trials of premium features for a set period to evaluate value without full commitment.
- Subscription flexibility. Monthly or yearly subscriptions to reduce barriers. Ability to pause and resume subscriptions without penalty to increase trust and retention and to avoid the feeling of loss.
- Promotions and discounts. Introductory and other types of discounts to let users experience premium benefits with a lower barrier to entry.
- Loyalty rewards. A rewards system where long-term free users or frequent referrals earn discounts on premium plans.
- Popular payment methods. Support of local payment systems like [MB Way](https://www.mbway.pt/), [Multibanco](https://www.multibanco.pt/) or [PayPal](https://www.paypal.com/) alongside credit and debit cards.
- Adjustable pricing by region. Purchasing power parity as an anchor to adjust pricing to the local economy.

## Why we expect it to be successful

### Finances
![9.png](/mellon/9.png)
We’ve calculated [a financial plan for the first 5 years](https://docs.google.com/spreadsheets/d/15M55fycYUv009NIfZJQrFvLoNCnASicz6AkxnT4PLz4/edit?usp=sharing) of working on the product. We’ve taken into account reserve for paperwork and missed deadlines. We also optimised marketing and product strategies to lower the burn rate required to develop product. Finally, our estimations are based on a complex model, incorporating retention, new users acquisition, taxes, salaries, infrastructure and other expenses, all the incomes and various conversion rates.

We estimated project turnover in the 5th year of €352.000. It is supported by:

- Feature abundance. By year 5, Mellon will have released and optimised basic implementations of all the core features, including post-quantum cryptography, passwordless authentication, adaptive AI-based security, real-time collaboration tools and local-first architecture. This will be the reason behind retention metrics near the top of the industry benchmark, 5% free to paid user individuals conversion rate and 0.2% corporate subscription conversion rate from the cumulative active users amount.
- Sustainable growth. From early activities like blog and social networks accounts launch, to later penetration of other EU and South Asia counties’ markets, we’ll ensure stable users acquisition. Constant investments from 10% to 20% turnover in marketing will result in 39.000 active users by the end of the fifth year of operations. Thousands of new users will be attracted by webinars, blog articles, social media and other publications — and hundreds acquired by word of mouth and direct advertisements resulting in consistent pace of 4.000 newly acquired users from various marketing channels every month by the end of the considered period.
- Healthy revenue streams. Implementation of dual licensing model, individual payment methods and subscriptions in the first operational year, as well as loyalty rewards, trials, family and corporate subscription is the second one, will help to build balanced revenue streams. According to our estimations for the fifth year, we will gain nearly €148.000 in individual and family subscriptions, €126.000 in direct corporate contracts and €78.000 in corporate subscriptions resulting in €352.000 year turnover.
- Strategy optimisation. Alternating focuses on developing functionality, accelerating growth rates and improving product monetisation allows for turnover growth: €5.000, €52.000, €228.000, €308.000 and reaching €352.000 and a break-even point with a return on investment ratio above 1.0 by the end of fifth year. A multiple increase in the marketing budget at this point will ensure rapid revenue growth further on.
- Target market segments and potential. On the one hand, we focus on individual and family users, particularly privacy-conscious users in developed markets. Estimated market size in Europe and South Asia combined is €1.5 billion annually, with Mellon targeting a small 0.005% market share by year 5. On the other, we target small and medium-sized enterprises requiring secure and collaborative password management solutions. The total addressable market is €800 million in mentioned regions, with Mellon aiming for a 0.02% share by year 5.

We also estimated assets value in the 5th year as €365.000. We derived it from several factors:

- Revenue multiple method. This technique is widely used for SaaS companies, including security or password management products. Multiplying €352.000 expected revenue on 5, which is typical for tech startups, we receive €1.760.000. This optimistic estimate is also baked by expected balanced split between B2C and B2B revenue streams, innovative product, and break-even point reach. On the other hand, we have to take into account objective risks: thin profit margins of 3.4%, high operational costs will be making 96.6% of the turnover, where salary will be taking 65% and won’t be reducible without lay offs, and highly competitive market, despite it shows moderate but healthy growth.
- User-based valuation. Expecting 39.000 active users will bring €149.000 from individual subscriptions means single average user annually brings €4. Average password manager industry user’s lifetime value is €30. It brings an estimate of up to €968.500 not yet received revenue from the same users which has potential to be obtained during next 6.5 years before being exceeded. It is also affected by risks caused by open-source nature of the product described below.
- Profit multiple method. Expected annual profit of €12.000 in the fifth year multiplied by 20, which is common ratio for a tech startups valuation, result in €240.000. However, considering early stage of our product, we suppose to be expected to focus on users, revenue and growth instead of profits.
- Other assets. It’s worth to mention such content marketing asset as a blog with 25,000 monthly visitors or email newsletter database with up to 256,000 addresses, and 126 established B2B contracts. Considering €2-5 per monthly unique visitor, €25-50 per 1,000 addresses and €500-2,000 per contact, we get €120.000 on the low end and €390.000 on the high end.
- Open source codebase. Despite brining advantages like transparency, community trust being convert into selling points and growth drivers, it also limits exit options. Being available for copying and modifications, this asset doesn’t bring any additional value and allows migration to self-hosted replicas or cloud instances supported by other providers. Yet the administrator rights over repository and the right to own the licenses still might be released by alienation upon sale.

Shrinking possible ranges to a single value, considering all of the factors above, is resulted in a humble yet seemingly realistic €365.000 estimation of assets value in case of potential company sale with all of it’s assets by the end of the fifth year. Yet it has a potential future growth aligned with active users influx, increased turnover and profits.

### Product

Mellon’s product strategy is displayed in the same [financial plan for the first 5 years](https://docs.google.com/spreadsheets/d/15M55fycYUv009NIfZJQrFvLoNCnASicz6AkxnT4PLz4/edit?usp=sharing). Ideally, we see our product on various clients: website, mobile apps and extensions for main browsers. Yet, from the start we’ll focus on a website.

We also consider, that password management tools have relatively high retention ratio because:

1. Once set up, these tools become essential to accessing other services.
2. Switching costs are relatively high due to the effort required to migrate passwords or 2FA settings.
3. Many users access these tools through enterprise/business accounts, which drives higher retention.

The challenges we are ready to face to keep these numbers high besides implementing rich functionality:

- Perceived complexity of setup.
- Forgetting to use the tool.
- Deciding features not worth the effort.
- Setting up less than 2-3 passwords/tokens.
- Lack of integrations or paid features to create "stickiness”.

Another point we’d like to cover is the idea to create product with English and Portuguese language full localisation to enhance accessibility and user experience for the local population. Including two languages in the interface and development will also help to add new ones in the future much easier.

### Marketing

![Screenshot 2024-12-13 at 23.18.57.png](/mellon/10.png)

We see a rich possibility to acquire users through various digital marketing channels:

- Content marketing. Starting our own blog, social networks and mailing lists falls into this category. Sharing insights on password health and cybersecurity tips will establish your tool and attract users in long term with a cost of content creation. Featuring in other tech-related media: local newsletters or social networks blogs.
- PR and external publications. By using news hooks correctly, we will attract almost for free thousands of people who wish to try our product. Starting from industry classics like [Product Hunt](https://www.producthunt.com/) or [AppSumo](https://appsumo.com/), we’ll also leverage local media like [Público](https://www.publico.pt/) or [Codrops](https://tympanus.net/codrops/).
- Educative and training projects. Starting by comprehensive onboarding and continued with educational resources to create a demand of new users doing their jobs differently rather than using password managers. **These projects also bridge the cybersecurity skills gap, facilitating user adoption and effective utilisation of advanced features. Free online or in-person workshops on cybersecurity will demonstrate our expertise and product values.
- Partnerships. We plan to collaborate with wide range of organisations to promote the tool and contribute to the development of cybersecurity expertise.
    - Portuguese universities and educational institutions — for internships, courses, practices, collaborative qualification works or **workshops and seminars on cybersecurity*.*
    - Communities: [open-source alternative lists](https://www.opensourcealternative.to/), [self-host enthusiasts](https://github.com/awesome-selfhosted/awesome-selfhosted), [local-first developers](https://localfirstweb.dev/), [Free Software Foundation](https://www.fsf.org/) or [Electronic Frontier Foundation](https://www.eff.org/)**,** security specialists like [OpenPrivacy](https://www.openprivacy.org/), [OWASP](https://owasp.org/), [OpenSSF](https://openssf.org/) or [PrivacyTools.io](http://privacytools.io/), [Reddit](https://www.reddit.com/) and [Zwame](https://forum.zwame.pt/) users keen on privacy, cybersecurity and self-hosting.
    - Events like [Web Summit](https://websummit.com/), [Hacktoberfest](https://hacktoberfest.com/) or [FOSDEM](https://fosdem.org/2025/) to present our product to diverse range of potential users and to sign B2B contracts.
- Portuguese tech influencers. Starting from microbloggers with under 50 000 audience found on [Influencer Hero](https://www.influencer-hero.com/blogs/top-portuguese-instagram-influencers-find-influencers-in-portugal), [Collabstr](https://collabstr.com/influencer-marketing/lisbon-portugal) or similar services — or directly signed by our marketing team. Ending with famous ones like [Bernardo Almeida](https://www.youtube.com/channel/UCDOZDfbVGOrywV4n0WeaRAA) or [Nuno Agonia](https://www.youtube.com/c/nunoagonia).
- Localised advertisement campaigns. Culturally relevant marketing with relatable offers on Facebook, Instagram, Youtube, Google Ads and other platforms. Promotional campaigns with discounts leveraging local holidays like Christmas or Dia de Portugal.

![Screenshot 2024-12-13 at 23.27.44.png](/mellon/11.png)

Key unique advantages for market differentiation and selling points we are going to test in our marketing campaigns transparently communicating possible values:

- Transparency through open source. Offers full access to its codebase, encryption methods, compliance reports, and architectural decisions. Reassures clients in regions skeptical of proprietary software.
- Offline and decentralised functionality. Reduced reliance on centralised infrastructure in regions with unreliable or insecure networks. Attracts users in regions with unreliable internet connectivity or those wary of central server dependency.
- Collaboration tools. Enables secure password sharing and role-based access delegation. Facilitates multi-user collaboration for personal and corporate use cases.
- Future-proof security. Stay ahead of the curve with post-quantum cryptography—your passwords, secured for the next generation of computing. Appeals to forward-thinking clients concerned about long-term data security in sectors like finance, healthcare, and government.
- Zero-knowledge architecture and privacy-oriented design. Your secrets are yours alone — our zero-knowledge architecture ensures no one, not even us, can access your data. Features decoy passwords and temporary sensitive data obfuscation. Supports email aliases for enhanced user anonymity. Builds trust, especially in privacy-conscious regions and industries handling sensitive data, like law firms or journalists. Only email for registration and usage. Nothing for self-hosting. No data we collect without explicit request.
- Adaptive security. Smart protection that evolves with you — AI-driven security detects and responds to potential threats in real-time. Appeals to users in high-risk industries like e-commerce and SMEs without dedicated IT security teams.
- Seamless access. Say goodbye to passwords with secure biometric and token-based access powered by passwordless authentication methods. Appeals to tech-savvy users and enterprises seeking efficiency and security.
- Better than built-in tools. Browsers include limited tools for generating and saving credentials, they lack the encryption, full functionality, and cross-platform versatility of dedicated vaults. Only 24% browser storage user know about it.
- General digital security. Your peace of mind, guaranteed—state-of-the-art encryption for your most valuable data. Users with password managers were nearly twice less likely to experience identity or credential thefts: 17% vs 32%.
- Empowerment. Be finally free from platforms. Take control of your digital life with tools designed for transparency and trust. Even if you use cloud features, you still have all the data encrypted backups locally. You might feel free to export them or use your own synchronisation tool.
- Sustainability. An ethical, open-source solution built for a safer, more secure digital future.
- Simplicity. Ease of use and set up was a recurrent theme among vault users. Many users emphasised the importance of password managers that integrated smoothly with their devices and operating systems.

Segments we consider and possible offers to them:

- Individual users. Securely manage personal passwords and sensitive information. Utilise advanced features for enhanced security.
- Families and small groups. Share passwords securely with family members or close contacts. Collaborate using role-based access and sharing features.
- Small end medium enterprises. Streamline secure password management across teams. Delegate access roles and monitor password sharing securely. Forward-thinking solution prepared for the quantum computing era. Also, many small businesses in Portugal are undergoing digital transformation. Offering team-oriented tools like password sharing and role-based access delegation can attract them to paid plans.
- Finance and banking. Quantum-ready security and advanced 2FA to safeguard financial transactions and sensitive customer data.
- Regions with limited connectivity. Operate effectively in low-bandwidth environments using offline functionality.
- Privacy-concerned users. Avoid dependency on centralised cloud services with offline-ready solutions built for heightened security needs. We’ll also highlight your open-source nature, zero-knowledge architecture, and GDPR compliance to build credibility for consumers skeptical about sharing sensitive data online.

Portugal’s startup ecosystem with over 4,700 companies and 16% annual growth is an ideal B2B launchpad for Mellon. The initial strategy focuses on engaging other incubator membered startups as early adopters, [mirroring Stripe’s successful approach](https://paulgraham.com/ds.html). We start with English and Portuguese language support, compliance with the National Strategy for Cyberspace Security, and adaptive onboarding process for different user categories to drive adoption. Tailored pricing, including family bundles and regional discounts, ensures affordability, while partnerships with local influencers and PR campaigns in media outlets enhance visibility*.*

The product is international from scratch. Mellon is ready to enter yet another market as we make a corresponding localisation and pass possible additional user data regulations. We see this internationalisation process to privacy-conscious regions with high Purchasing Power Parity like Germany, Netherlands, France, Switzerland and the Nordic countries. Mellon is positioned to scale across Europe in the nearest years by following international standards like GDPR and OWASP Top Ten.

Finally, we plan to penetrate the South Asia region, as an expectedly fast-growing market. Cost-effective solutions are critical in emerging markets with cybersecurity and other budget constraints. We’ll try to use such an opportunity positioning Mellon with streamlined passwordless authentication and offline-ready access for fast-growing businesses. Open-source tools can reduce licensing costs and provide a customisable foundation with optional premium support.

Mellon’s global strategy includes offering localised services, such as regional hosting providers for data residency compliance and multilingual customer support.

## Who exactly “we” are

In our team we collected enough expertise to kick off the company, to launch and distribute first versions of the product, and to grow fast. The founding team combines deep technical expertise, creative vision, and strategic market insight. We know how to effectively work together, make and follow decisions.

### Vladimir Lazarev

An engineering leader with over seven years of experience driving product innovation, managing engineering teams, and building scalable technology solutions.

- A bachelor's and a master's degree in Applied Mathematics and Computer Science from Moscow State University
- At Emerging Travel Group, an international travel tech company, he led four product teams to develop transportation booking systems, implementing cutting-edge engineering practices to ensure operational excellence.
- His tenure at Tinkoff, a major Russian digital bank, scaled engineering department from 12 to 50 engineers, launched high-impact digital products such as websites, mobile applications, and platform solutions that supported over 30 million monthly active users.
- Settled mentoring, onboarding and learning system, which helped his department to grow more than 10 recent universities graduates from interns to middle-specialists.
- Directly hired, mentored, and onboarded dozens of various engineers.
- Proficient in JavaScript, TypeScript, Node.js, Bun, React, PostgreSQL, GitLab CI, Docker, Kubernetes, and NGINX.
- Has product development as one of professional’s interests. Completed two levels of [Bureau’s management school](https://bureau.ru/school/managers/27aug2018/) and [How to Develop a Product Your Customers Will Gladly Buy](https://zamesin.ru/producthowto/) — a course on Jobs To Be Done and Customer Development frameworks. Experienced in making product decisions and conducting user researches.
- Builds first versions of the product. Takes CEO role and sets up company operations to deal with planned company growth and new hirings.

### Sofia Azzheurova

Both UX/UI and graphic designer with over five years of experience in user-centric experiences and intuitive, accessible, and inclusive interfaces.

- Heading the Umnazia’s team of 11 designers, illustrators, and motion artists, she spearheaded the creation of digital educational tools that engaged over 180,000 active users.
- At Coding Invaders she helped to increase landing page conversion rates from 14% to 23% and Instagram followers from 15K to 28K.
- Has experience creating robust design systems that became a foundation for cross-departmental collaboration, ensuring consistency and scalability. Her portfolio, which spans POS terminal interfaces for restaurants, self-service checkout systems, and AI-powered tools at Just AI.
- Makes digital layouts and advertisement creatives. Conducts first product researches.
- Drives accessibility and usability to ensure the platform meets diverse user demographics and needs.

### Evgenii Antonenkov

Performance Marketing Manager with over five years of experience in end-to-end advertising strategies and digital campaigns for finance, HR, and IT industries — and expertise in market trends identification, user acquisition and compelling narratives that resonate with target audiences.

- Managed annual budgets of $1M–$2.2M, creating data-driven strategies, and utilising advanced analytics to drive impactful marketing results.
- Scaled advertising performance significantly, achieving milestones like a 150% increase in conversions and an 81% reduction in cost-per-lead.
- Developed high-performing landing pages and leading creative initiatives, including ad copywriting, video production, and UX improvement.
- Proficient with tools like Google Ads, Facebook Ads and Google Analytics.
- Responsible for validating hypotheses before coding them.
- Experienced in mentoring junior marketers and engaging directly with clients.
- Leads Mellon’s market strategies and brand development to acquire new users through various digital marketing channels

Our passion for transparency and user empowerment ensures a product built for long-term trust and adorement by users. We aim to build a scalable business that benefits individuals, SMEs, a wider community and positively impacts Portugal economy by creating high-qualified job positions.

## How we plan to implement all of this

### Technologies

First, let’s comment out feature implementations from tech perspective:

- AI models for the adaptive security will be trained using machine learning algorithms over technical and analytics data, and cobrowsing sessions voluntarily provided by our users. They will be part of the cloud API with potential to be used locally on the clients depending on the size and optimisations.
- Kyber, Dilithium and SPHINCS+ were standardised by US National Institute of Standards and Technology. Open Quantum Safe has already published [liboqs](https://github.com/open-quantum-safe/liboqs) — a C library with support of these algorithms and exposable API for direct calls from other languages. I.e. using [built in Node.js node-gyp library](https://github.com/nodejs/node-gyp) to combine it with JS backend.
- Since passkeys for passwordless authentication are based on FIDO2 standards, corresponding key pairs might be generated using libraries like [simplewebauthn](https://github.com/MasterKale/SimpleWebAuthn) and synchronised cross-platformly with generated QR codes containing private keys and metadata.
- Local-first will be achieved by using client-side database like [PGlite](https://github.com/electric-sql/pglite) with encrypted backups and synchronisation engine like [Logux](https://github.com/logux) which implements CRDT mechanism. [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) [is built in modern browsers](https://caniuse.com/cryptography) and allows to transfer all the data safely between server and various clients.
- zk-SNARKs are already implemented in libraries like [SnarkJS](https://github.com/iden3/snarkjs).
- 2FA tools also has common implementations like [otplib](https://github.com/yeojz/otplib).
- Shamir's Secret Sharing, probably, will require self implementation.
- Password monitoring will be working thanks to integration of the [haveibeenpwned database](https://haveibeenpwned.com/) through API as well as creating and looking through our own database based on [huge data leaks like this](https://cybernews.com/security/rockyou2024-largest-password-compilation-leak/).

Besides the tools mentioned above, our major technical stack entities as planned:

- [Bun](https://bun.sh/) as a modern server JavaScript engine.
- [Hono](https://hono.dev/) as a high-performant JS framework for server development.
- [TypeScript](https://www.typescriptlang.org/) to avoid unexpected data cast errors and develop everything more smoothly.
- [PostgreSQL](https://www.postgresql.org/) as a compatible to PGlite server-side database.
- [Preact](https://preactjs.com/) for an interactive web client and as a lighter and faster alternative to classic React.
- [React Native](https://reactnative.dev/) with native modules for mobile clients.
- [Docker](https://www.docker.com/) to easily run everything locally on engineers’ devices and in production.
- [NGINX](https://nginx.org/) to balance load and set up some basic caches.
- [GitHub Actions](https://github.com/features/actions) to automate updates from codebase to production.
- [Cloudflare](https://www.cloudflare.com/en-gb/) and other vendors who provide CDNs, VMs and other infrastructure.

While choosing performant tools, we’ll implement other decisions to enable scalability for the future growth. Stateless server and local-first client architectures provide horizontal scalability. While regional hosting and CDN integration ensure low-latency performance and compliance with data residency laws.

### Incorporation

Portugal is the ideal launchpad for Mellon due to its thriving startup ecosystem, strategic government initiatives for innovative entrepreneurship, and its open, welcoming cultural and legal (like [The Law no. 21/2023](https://startupportugal.com/startup-status/)) environment for foreign founders. Incubators like [IPStartUp](https://ipstartup.ips.pt/) or [Startup Leiria](https://startupleiria.com/) who partner with universities provide unique opportunities for collaboration and growth. We love Portugal as a place to live and work because of the climate, nature, and talented people we have met visiting your country as tourists. Having managed legal entities in Russia, Serbia, and Montenegro, we evaluate Portugal as a location we wish to develop and launch Mellon. We hope to contribute back later to the Portuguese economy and society by creating an innovative company with high-qualified job openings and export of its well-known cyber security product and awareness programs.

Steps to incorporate the company during the incubation period. Pre-incubation phase:

- Set the foundation. Secure sufficient funds from our, founders’, personal resources for initial product development according to the obligations provided.
- Start preparations for incorporation. Engage legal advisors in Portugal to understand incorporation requirements and draft initial documentation.

Incubation Q1:

- Prototyping and hypothesis validation. Build a prototype of the password generator to conduct small-scale user testing for hypothesis validation on password usability, security features, and local-first advantages.
- Further product development. Complete development of basic password management features and the password generator. Add a a 2FA TOTP generator functionality.
- Marketing and awareness. Launch teaser campaigns in social media and founders’ personal networks to attract early users. Initiate content development for the SEO blog and security-focused articles.
- Incubator engagement. Participate in business management, marketing or other workshops and activities provided by the incubator. Use the incubator’s legal advisory services to finalise compliance documents.

Incubation Q2:

- Scaling product features. Conduct a security audit with external experts to fix potential breaches in code implementation. Open-source the initial codebase to build trust and transparency. Set up GitHub workflows for CI/CD automation.
- B2B sales efforts. Begin pre-contract discussions with early adopters among other companies participating in incubation or among incubator’s alumni. Leverage incubator support to present Mellon at relevant industry events or trade shows.
- Community engagement. Launch Mellon’s presence on social platforms and forums. Use incubator’s  partnerships with universities to establish our owns for talent acquisition and collaborative projects like internships, courses, practices and qualification works.

Incubation Q3 and Q4:

- Final product features and open launch. Complete development of advanced features like fully local-first clients, secrets synchronisation via cloud and full end-to-end encryption. Test and refine the product with initial B2B clients and free individual users.
- Sales preparation. Finalise initial product pricing models, selling points, landing pages, product and legal documentation, and support processes. Develop advertising creatives tailored for individual users, open source, transparency, and community audit benefits.
- Company opening. Register the company in Portugal during this period to meet legal and operational deadlines. Use incubator-provided resources like office space, technical equipment, and tax compliance support. Open legal entity’s bank account to fully launch sales.
- Complete the incubation program and transit seamlessly into an acceleration program by showcasing a functional, revenue-generating product with established B2B contracts and a growing B2C customer base.

Key points accompany this incubation plan:

- Bootstrap funding. We, the founders, will self-fund the development, covering product creation, validation, and marketing expenses until the product is market-ready.
- Prototypes creation and hypothesis validation. Functioning prototypes will validate user demand and ensure a viable product-market fit before investing much into full-fledged feature development and promotion.
- Early B2B sales and agreements. Pre-contract agreements with early adopters will be signed via the incubator, allowing immediate post-incubation operations.
- B2C sales readiness. All operational, technical, and marketing resources will be prepared for a B2C launch under the newly incorporated company after bank account opening, integration of online payment provider and accounting preparations.
- Utilisation of incubation opportunities. Facilities, equipment, advisory programs or events will be instruments in achieving milestones.
- Exit to acceleration: By the end of the incubation period, the company will be ready for an acceleration program, focusing on upscaling. We also consider to pick up acceleration program faster if we’ll see an opportunity to start a company faster during the incubation year.

### Hirings

Financial, product, marketing and hiring strategy were aligned together to support product growth without overburdening operational costs. We minimise the money burn rate by:

- Incrementally onboarding employees in sync with revenue growth and product milestones. It also helps to ensure personnel are hired and onboarded with enough attention required to choose the best available candidates and carefully integrate them into high-speed startup context.
- Avoiding overstaffing during early stages while ensuring all critical functions are addressed.
- Offering suitable[11][12] salaries that align with market standards for recent graduates on their first full-time junior or intern positions with further income indexing, educational and growth opportunities.

We also focus on hiring recent graduates from Portuguese universities to address the challenge of securing entry-level opportunities while fostering long-term growth and providing humble impact to country’s economy.

As the startup grows, these employees will benefit from career development opportunities, positioning them as industry experts in emerging fields like cryptography, digital security, or cutting technology edge web development.

**Quarterly Hiring Schedule and Salaries**

2026 Q4 — 3 Bachelor graduates, each at €1,500/month:

- Content Editor. Our first hired employee should be proficient in English and Portugal languages as well as writing articles to pick up publishing blog and social media posts. Will also help us to remove translation costs and make all the advertising creatives more native and relevant to the local market. We plan that this hire will help us to double the amount of content and scale the number of new users from our blog and external publications as it is a crucial part of growth and user acquisition strategies.
- Sales Manager. We plan to hire this position to join our company delegation on our first Web Summit. We see it as a major opportunity to sign B2B contracts on licensed usage of our product. After, this specialist will drive this activity with a goal of at least 4 new contracts monthly. We’ll look for a person who is interested in negotiation practice and knows how legal entities operate in Portugal.
- Full-stack Engineer. By the end of 2026, we plan to start implementing user-faced resource heavy features like timely prompts to take paid plan, email alias integration to hide your real one from some services and prevent its’ leak or secret sharing via generated links and other mechanics. This will require additional engineering capacity we plan to full-fill with a proficient JS developer. After, this specialist will continue with other features as user base growth will require new levels of attention implementing our product plans on code.

2027 Q2 — 1 Bachelor graduate:

- QA Engineer with Bachelor degree, €1,500/month. To validate the security of sharing mechanics before their full-time launch, we’ll require a dedicated quality assurance engineer. After, this engineer will join the works on of the core features of our product — implementation of Post-Quantum Cryptography, as it will be an additional challenge to validate the correctness of the results of such algorithms and pass certifications. Later, it will be plenty of work on further release automation to minimise the amount of manual checks.

2027 Q3 — 2 Bachelor and 1 Master graduates:

- Security Researcher with Masters degree, €1,800/month. Will research the up to date articles on Post-Quantum Cryptography and verify technical implementation and usage of the algorithms as well as study and improve general product implementation to bolster security. Will be company’s contact for the bug bounty program. Will later participate in features like adaptive security, leaks monitoring or passwords rotations. Will ensure compliance with open standards.
- Support Engineer with Bachelor degree, €1,500/month. While ensuring high quality experience for our users is part of each team member’s routine, we’ll require a dedicated support engineer in alignment to our strategy to make more than 50% revenue in 2027 from B2B contracts and corporate subscriptions. As companies usually expect a faster response to their requests and raise digital security issues affecting a large number of people at once.
- Data Engineer with Bachelor degree, €1,500/month. Will prepare infrastructure for quantitive researches based on product user base behaviour to enable further data-driven decision making, split-testing and data capturing for future AI models training for adaptive security feature.

2027 Q4 — 1 Bachelor and 2 Master graduates:

- Mobile Engineer with Bachelor degree, €1,500/month. Will enhance mobile accessibility and start to develop cross-platform mobile application on React Native to be released in 2028. It will take some time to adapt features implemented on the web site for mobile platforms and add additional ones — like usage of operational system layer vault.
- UX Researcher with Masters degree, €1,800/month. Will describe and follow User Stories and set tasks to optimise user experience and make it more intuitive for a competitive edge. That, in addition to Jobs To Be Done framework usage, is the way to acquire more users from the indirect competitors: memorisation, paper or digital notes and browser storages — and ensure, that users acquired by marketing team stay in product with and increase long-term retention.
- Data Analyst with Masters degree, €1,800/month. Will enhance realtime and retrospective data dashboards and provide actionable insights for future decision-making, adapting both product and marketing strategies.

## References

1. [Mellon — Competitors and Market Analysis Based on AppSensor and SimilarWeb Data](https://docs.google.com/spreadsheets/d/1TRoU6Lo783eqLC8biEb5_IVea5ASCDCUHBcOjGHFZaQ/edit?gid=0#gid=0)
2. [Verified Market Research — Password Management Software Market for 2024-2031](https://www.verifiedmarketresearch.com/product/password-management-software-market/)
3. [Mordor Intelligence — Password Manager Market Size & Share Analysis. Growth Trends & Forecasts from 2025 to 2030](https://www.mordorintelligence.com/industry-reports/password-management-market)
4. [Security.org — 2024 Password Manager Industry Report and Statistics](https://www.security.org/digital-safety/password-manager-annual-report/)
5. [Statista — Cybersecurity in Portugal](https://www.statista.com/outlook/tmo/cybersecurity/portugal)
6. [Nucamp — Portugal Cybersecurity Job Market: Trends and Growth Areas for 2025](https://www.nucamp.co/blog/coding-bootcamp-portugal-prt-portugal-cybersecurity-job-market-trends-and-growth-areas-for-2025)
7. [Christopher Mims for The Wall Street Journal — In the Future, There Will Be No Passwords, Because You Keep Giving Yours Away](https://www.wsj.com/articles/in-the-future-there-will-be-no-passwordsbecause-you-keep-giving-yours-away-11666411211)
8. [Grand View Research — Password Management Market Size, Share & Trends Analysis Report from 2024 to 2030](https://www.grandviewresearch.com/industry-analysis/password-management-market)
9. [Fortune Business Insights — Password Management Market Size, Share & Industry Analysis and Regional Forecast for 2024-2032](https://www.fortunebusinessinsights.com/password-management-market-103753)
10. [Google — Why Open Source?](https://opensource.google/documentation/reference/why)
11. [How much does a Full Stack Developer make in Lisbon, Portugal? by Glassdoor](https://www.glassdoor.com/Salaries/lisbon-portugal-full-stack-developer-salary-SRCH_IL.0%2C15_IM1121_KO16%2C36.htm)
12. [How much does a Digital Content Specialist make in Lisbon, Portugal? by Glassdoor](https://www.glassdoor.com/Salaries/lisbon-portugal-digital-content-specialist-salary-SRCH_IL.0%2C15_IM1121_KO16%2C42.htm)
