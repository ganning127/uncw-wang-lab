import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SimpleGrid, Container } from '@chakra-ui/react'
import { HeadingWithDesc } from '../components/Headings/HeadingWithDesc'
import { TeamCard } from '../components/Cards/TeamCard'
import { SmSep } from '../components/Separators/SmSep'
import { Banner } from '../components/Headings/Banner'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
export default function Team() {
    return (
        <>
            <Head>
                <title>Team - Wang Lab</title>
                <meta name="description" content="Meet our PI, graduate researchers, undergraduate researchers, and high school researchers" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active='team' />
            <Banner>Our Team</Banner>

            <Container maxW='container.xl' p={15}>
                <HeadingWithDesc>Principal Investigator</HeadingWithDesc>
                <TeamCard
                    name="David Wang"
                    title="Principal Investigator"
                    email="john@doe.com"
                    resume="TODO"
                    about="Neurotechnology studies in humans to advance diagnostics and therapeutics for mental health disorders."
                    image="/johndoe.png"
                />

                <SmSep />

                <HeadingWithDesc>Graduate Researchers</HeadingWithDesc>
                <SimpleGrid columns={{ base: 1, md: 2, md: 3 }}>
                    <TeamCard
                        name="David Wang"
                        title="Principal Investigator"
                        email="john@doe.com"
                        resume="TODO"
                        about="Neurotechnology studies in humans to advance diagnostics and therapeutics for mental health disorders."
                        image="/johndoe.png"
                    />
                    <TeamCard
                        name="David Wang"
                        title="Principal Investigator"
                        email="john@doe.com"
                        resume="TODO"
                        about="Neurotechnology studies in humans to advance diagnostics and therapeutics for mental health disorders."
                        image="/johndoe.png"
                    />
                    <TeamCard
                        name="David Wang"
                        title="Principal Investigator"
                        email="john@doe.com"
                        resume="TODO"
                        about="Neurotechnology studies in humans to advance diagnostics and therapeutics for mental health disorders."
                        image="/johndoe.png"
                    />
                </SimpleGrid>

                <SmSep />

                <HeadingWithDesc>Undergraduate Researchers</HeadingWithDesc>
                <SimpleGrid columns={{ base: 1, md: 2, md: 3 }}>
                    <TeamCard
                        name="David Wang"
                        title="Principal Investigator"
                        email="john@doe.com"
                        resume="TODO"
                        about="Neurotechnology studies in humans to advance diagnostics and therapeutics for mental health disorders."
                        image="/johndoe.png"
                    />
                    <TeamCard
                        name="David Wang"
                        title="Principal Investigator"
                        email="john@doe.com"
                        resume="TODO"
                        about="Neurotechnology studies in humans to advance diagnostics and therapeutics for mental health disorders."
                        image="/johndoe.png"
                    />
                    <TeamCard
                        name="David Wang"
                        title="Principal Investigator"
                        email="john@doe.com"
                        resume="TODO"
                        about="Neurotechnology studies in humans to advance diagnostics and therapeutics for mental health disorders."
                        image="/johndoe.png"
                    />
                </SimpleGrid>

                <SmSep />

                <HeadingWithDesc>High School Researchers</HeadingWithDesc>
                <SimpleGrid columns={{ base: 1, md: 2, md: 3 }}>
                    <TeamCard
                        name="David Wang"
                        title="Principal Investigator"
                        email="john@doe.com"
                        resume="TODO"
                        about="Neurotechnology studies in humans to advance diagnostics and therapeutics for mental health disorders."
                        image="/johndoe.png"
                    />
                    <TeamCard
                        name="David Wang"
                        title="Principal Investigator"
                        email="john@doe.com"
                        resume="TODO"
                        about="Neurotechnology studies in humans to advance diagnostics and therapeutics for mental health disorders."
                        image="/johndoe.png"
                    />
                    <TeamCard
                        name="David Wang"
                        title="Principal Investigator"
                        email="john@doe.com"
                        resume="TODO"
                        about="Neurotechnology studies in humans to advance diagnostics and therapeutics for mental health disorders."
                        image="/johndoe.png"
                    />
                </SimpleGrid>
            </Container>

            <SmSep />
            <Footer />
        </>
    )

}