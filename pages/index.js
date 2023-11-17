import { Flex, Heading, Image, Link } from '@chakra-ui/react'
import { logoteaser, discord, twitter, telegram } from '../svg'

const Home = () => {

	const socialStyle = {
		w: '40px',
		_hover: {
			cursor: 'pointer',
		},
	}

	return (
		<Flex
			h='100vh'
			justifyContent='center'
			alignItems='flex-end'
			maxW='647px'
			flexWrap='wrap'
			m='0 auto'
			transform='scale(0.8)'
		>
			<Flex
				w='auto'
				h='auto'
				minH='245px'
				maxW={{ base: '230px', sm: '460px', md: '647px' }}
				flexWrap='wrap'
				justifyContent={{ base: 'center', sm: 'right' }}
			>
				<Image
					maxH={{ base: '105px', sm: '140px', md: '215px' }}
					src={logoteaser}
					alt='HoruscopeDao: Providing Deeper Liquidity across Layer 2 networks'
					zIndex='2'
				/>
				<Heading
					mt={{ base: '35px', sm: '0' }}
					ml={{ base: '0', sm: '32px', md: '64px' }}
					mb='0'
					color='white'
					whiteSpace='pre'
					fontSize={{ base: '24px', md: '38px' }}
					fontWeight='normal'
					lineHeight='1.3'
				>
					{`THE SKY
IS 
THE
LIMIT`}
				</Heading>
				<Heading
					fontSize={{ base: '11px', md: '16px' }}
					color='white'
					letterSpacing='1.2px'
					mt='35px'
					mb='0'
					textAlign={{ base: 'center', md: 'initial' }}
				>Q4-2023/Q1-2024</Heading>
			</Flex>
			<Flex
				w='100%'
				h='auto'
				mt={{ base: '21px' }}
				mb={{ base: '30px', lg: '90px' }}
				maxW={{ base: '381px', sm: '460px', md: '647px' }}
				bottom='0'
				justifyContent='center'
				alignItems='flex-start'
				gridGap='30px'
				zIndex='1'
			>
				<Link href='https://discord.gg/'>
					<Image
						src={discord}
						alt='Discord'
						{...socialStyle}
					/>
				<Link href='https://x.com/horuscopedao?s=21'>
				<Image
					src={twitter}
					alt='Twitter'
					{...socialStyle}
				/>
				</Link>
					<Image
						src={telegram}
						alt='Telegram'
						{...socialStyle}
					/>
				</Link>
				{/* <Image
					src={reddit}
					alt='Reddit'
					{...socialStyle}
				/> */}
			</Flex>
		</Flex>
	)
}

export default Home
