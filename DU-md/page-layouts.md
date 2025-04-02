Core Brand Identity

	Brand Name & Tagline

		Brand name
			p.intro					(text that introduced naming your brand)
			
			label					(Brand name)			
			detail					(a detail that makes it easier for users to find a name for their brand)
			text input field		BrandName(string)
				Update Preview			nav.BrandName, Hero.H1

		Tagline
			p.intro					(Explain how a good tagline could keep your band in the user's mind longer)
			checkbox				UseTagline(bool)
			
			label					(Tagline)
			detail					(text that makes users think of how a tagline can create fun or a deeper meaning)
			text input				Tagline(string)
					Update Preview		Hero.tagline

	Industry & values

		Industry
			p.intro					(text that explains that we need to know the industry to pre-set choices to make the design fit their brand)
			
			label					(Industry)
			detail					(select the industry that matches closest)
			dropdown				brand-industry.json
					Update Preview		order fitting preview (for now only landing is avablable)

		Values
			p.intro					(explanation about what values could mean for you as a brand)
			
			label					(Values)
			detail					(Select the values you want to express as your brand)
			multi-select			brand-values.json
					Update preview		brand-archetype.json chosen, based on industry * values

	Target Audience
			p.intro					(Choosing your target audience helps you create a brand that resonates with the right people. While these options are completely optional, they make 
									it 	easier to attract your ideal customers and find visuals, messaging, and designs that connect with them.)
									(Don't worry—this doesn’t mean you’ll exclude other groups! It simply helps you refine your brand’s focus and increase its impact.)

		Age range	
			label					(Age range)
			detail					(Defining an age range allows you to tailor your brand to those most likely to engage with your products or services. Think about who makes the decisions—for 
									example, if you're targeting kids or teens, their parents are often the ones making the purchase.)
			dropdown > age range	target-audience.json
					Update preview	"18-24" or "25-34": Mobile-first preview
					Input for		Color theory: Bolder color theories (simple, shades, complementary)
					Update preview	"65+": Larger fonts (18px base), larger type scale
					Input for		Color theory: modest color theories (simple, tints, tones, analogous)
					Input for		Tone of voice: 	"18-24" = -25% formal, +25% playfulness, +10% emotion
													"25-34" = -10% formal, +10% playfulness, +10% emotion
													"35-44" = +10% formal, -10% emotion
													"45-65" = +10% formal, -25% emotion
													"65+" = +25% formal, -25% emotion
					Update preview	#hero.img
					Input for		Imagery: age range in search query for imagery
		
		Location
			label					(Location)
			detail					(Your audience’s location affects their expectations, needs, and cultural preferences. People in different regions search for different styles, colors, and 
									messaging—whether it's local shopping habits, climate-related clothing choices, or even preferred design trends.) 
			dropdown > location		target-audience.json
					Update preview	#users.img
					Input for		Imagery: location in search query for imagery

		Interests
		Behaviors
		Goals
		Frustrations

			deprecated for now

	Mission & Vision

			deprecated for now

Visual Identity
	
	Color

			p.intro					(Text that explains that color vonveys emotion and expectations our a brand. Picking a lively or subdued color style says something about your brand, but it 
									could just as easily make you stand out in between competitors.)
			
		Color theory
					Update preview	colored elements (var(--color1), var(--color2) and var(--color3)) should update when the color page is loaded.
			label					(Color theory)
			detail					(color harmony is a stylistic choice based on color theory. A brand based on a single, strong color can be just as strong as a brand with two or three 
									colors, but they should fit your brand. The choices below are based upon your earlier choices as the industry your brand will operate in, and the values your brand wants to communicate.)
			dropdown > color theory	color-theory.json
			color picker > color1	archetype-color-typography-connections.json
			color picker > color2	color-theory.json
			color picker > color3	color-theory.json

	Typography
					Update preview	text elements (var(--ff-heading) and var(--ff-body)) should update when the typography page is loaded.
			p.intro					(Text that explains why to use typography that fits the industry and values of the brand. Why you would use a different font for headings and body.)

			label					(Heading font)
			detail					(text that explains what a heading is and that it can fit the brand.)
			dropdown > headings		archetype-color-typography-connections.json

			label					(body font)
			detail					(text that explains why you should use a different body font from the embellished heading font, because it needs to be legible when user need to read more 
									text)
			dropdown > body			archetype-color-typography-connections.json

			typeScale
				deprecated

	Logo
			p.intro					(Text that explains why a logo is the eye catcher of the brand and the website.)

			label					(logotype)
			detail					(your brand name, written in your brand heading font)

			label					(logomark)
			detail					(your full logo, a colorful version of your brand image)
			file > logomark	
					Update preview	header>nav.logo>img, footer.logo>img
					
			logo (logomark + logotype)
				deprecated for now
			
			logo maker 
				deprecated for now

			logo request form
				label				(Request logo design offer)
				detail				(Designing a logo is hard. Fill out the form below to request an offer on a logo based on your previous brand choices.)
				form				name/country/email address/comment/daden.fun brand choices

	Imagery
					update preview	#hero>img based on archetype, 
									#user>img based on target audience, 
									product#img based on industry
			p.intro					(Your industry, brand values and target audience characteristics lead to a set of images that portray your brand, products or services and your users in a 
									way that attracts your future users to your brand.)
			
			label					(Brand imagery)
			detail					(based on your industry and values choices these images fit your brand best as an eye catching image on your website)
			picker					3 images based on archetypes that rank highest on industry/values
					update preview	#hero>img based on archetype
			
			label					(User imagery)
			detail					(based on your target audience choices these images fit closest with your future users)
			picker					3 images based on archetypes that rank highest on target audience
					update preview	#user>img based on archetype
			
			label					(Product imagery)
			detail					(based on your industry choice these images fit your brand's products and services best)
			picker					3 images based on archetypes that rank highest on industry/values
					update preview	#product>img based on archetype

Brand Voice and Tone

	Tone-of-voice
					update preview	#hero>p based on tone-of-voice-sliders

			p.intro					(Your brand's tone-of-voice informs you how you communicate with your users. Based on your earlier choices, the sliders are already set to a value that 
									should fit your brand.)

			label					(Formality)
			detail					(Text what formality entails, from casual to professional)
			slider					Formality
					Update preview	#hero>p (tone-of-voice.md)

			label					(Playfulness)
			detail					(Text what Playfulness entails, from serious to playful)
			slider					Playfulness
					Update preview	#hero>p (tone-of-voice.md)

			label					(Respect)
			detail					(Text what Respect entails, from irreverent to respectful)
			slider					Respect
					Update preview	#hero>p (tone-of-voice.md)

			label					(Emotion)
			detail					(Text what Emotion entails, from matter-of-fact to enthusiastic)
			slider					Emotion
					Update preview	#hero>p (tone-of-voice.md)

	Messaging
			deprecated (might replace a way to find a tagline in the future)

	Copywriting
			p.intro					(text that introduced what will be done on the page. To write good texts, also know as 'copy writing', you need to have an engaging text that fits your brand's tone-of-voice.)

			label					(Call to action)
			detail					(A call to action is what you want your users or site's visitors to do first. Adjust the text to fit with what you want your customers to do.)
			textarea > CTA			copywriting.json > call to action
					Update preview	#hero>p

			label					(Strategy description)
			detail					(Your brand name and call to action might now fully share with what you want to achieve with your company. What is the problem that you are trying to solve?)
			textarea > strategy		copywriting.json > industry description
					Update preview	#user>p

			label					(Product description)
			detail					(And lastly, there is something you offer your customers. By writing a good description based on your tone-of-voice, you entice your customers to buy your products, because you solve their problems in a way they want to support.)
			textarea > product		copywriting.json > product description
					Update preview	#product>p

Application
	Website & App UI Style
			
			export styles / download component kit 
				deprecated for now
				
			Website request form
			label					(Request website offer)
			detail					(So you like what you see? Fill out this form to request a quote on a design, development and hosting of your brand page based on your previous brand choices.)
			form					name/country/email address/comment/daden.fun brand choices