import { Component } from "react";

interface MeState {
    section: 'about me' | 'background' | 'skills' | 'project' | 'testimonials'
}

function About() {
    return (
        <section data-section="about">
            <img src="https://avatars.githubusercontent.com/u/35181375?v=4" alt="My avatar"
                className="w-[10rem] h-[10rem] mr-5 rounded-3xl" />
            <p>
                <h2 className="text-3xl font-bold">Hello, I'm <span className="text-pink-400"><i className="opacity-[30%] text-gray-300 not-italic">(</i>flo<i className="opacity-[30%] text-gray-300 not-italic">)</i>ra</span>.</h2>
                I'm a full-stack developer with a passion for creating
                functional, beautiful, and unique web and native apps
                and experiences.

                <h3 className="mt-3 text-2xl font-bold">Some things I like!</h3>
                I'm really into music! Listening most all the time, my spotify is <a href="https://open.spotify.com/user/7a5n4y82qe7q9ed8fwoo4i7z7">@tascord</a>. <br />
            </p>
        </section>
    )
}

function Background() {
    return (

        <section data-section="background">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[10rem] h-[10rem] mr-5 rounded-3xl" width="10rem" height="10rem" viewBox="0 0 50 50">
                <path fill="white" d="M 6 2 C 3.800781 2 2 3.800781 2 6 L 2.015625 30.683594 L 2.03125 30.683594 C 2.023438 30.789063 2 30.890625 2 31 C 2 33.199219 3.800781 35 6 35 L 20.011719 35 L 20.015625 43.683594 L 20.0625 43.683594 C 20.054688 43.792969 20 43.886719 20 44 C 20 46.199219 21.800781 48 24 48 L 48 48 L 48 46 L 24 46 C 22.882813 46 22 45.117188 22 44 C 22 42.882813 22.882813 42 24 42 L 48 42 L 48 15 L 30 15 L 30 2 Z M 6 4 L 28 4 L 28 15 L 24 15 C 21.800781 15 20 16.800781 20 19 L 20.003906 27 L 6 27 C 5.277344 27 4.605469 27.210938 4.015625 27.550781 L 4 6 C 4 4.882813 4.882813 4 6 4 Z M 9 6 C 7.90625 6 7 6.90625 7 8 L 7 10 C 7 11.09375 7.90625 12 9 12 L 23 12 C 24.09375 12 25 11.09375 25 10 L 25 8 C 25 6.90625 24.09375 6 23 6 Z M 9 8 L 23 8 L 23 10 L 9 10 Z M 24 17 L 46 17 L 46 40 L 24 40 C 23.265625 40 22.609375 40.257813 22.015625 40.609375 L 22 19 C 22 17.882813 22.882813 17 24 17 Z M 27 19 C 25.90625 19 25 19.90625 25 21 L 25 23 C 25 24.09375 25.90625 25 27 25 L 41 25 C 42.09375 25 43 24.09375 43 23 L 43 21 C 43 19.90625 42.09375 19 41 19 Z M 27 21 L 41 21 L 41 23 L 27 23 Z M 6 29 L 20.007813 29 L 20.011719 33 L 6 33 C 4.882813 33 4 32.117188 4 31 C 4 29.882813 4.882813 29 6 29 Z" />
            </svg>
            <p>
                <h2 className="text-3xl font-bold">Education</h2>
                I'm currently enrolled as a student at <a href="https://tc.vic.edu.au">Templestowe College</a>
                in my senior years. <br />

                Heading towards a B.A in Computer Science, I'm working at the local IT desk building rapport
                with staff and students alike, and learning how to help others through technical issues.
            </p>
        </section>
    )
}

function Skills() {
    return (
        <section data-section="skills">

            <svg xmlns="http://www.w3.org/2000/svg" className="w-[10rem] h-[10rem] mr-5 rounded-3xl" width="10rem" height="10rem" viewBox="0 0 50 50">
                <path fill="white" d="M49.536,33.272c0.298-0.189,0.475-0.521,0.463-0.875c-0.011-0.354-0.207-0.675-0.517-0.845L37.574,25H42V10.611	C42,9.172,40.804,8,39.333,8H29V5.857C29,4.282,27.654,3,26,3H16c-1.654,0-3,1.282-3,2.857V8H2.667C1.196,8,0,9.172,0,10.611v13.531	C0,24.615,0.448,25,1,25h32.426l-3.635,2H1c-0.352,0-0.686-0.069-1-0.176v9.564C0,37.828,1.196,39,2.667,39h23.194	c-0.608,1.829-0.877,3.965-0.86,6.727c0.004,0.55,0.45,0.994,1,0.994c4.841,0,7.825,1.398,8.635,2.784	C34.815,49.812,35.144,50,35.499,50s0.684-0.188,0.863-0.495c0.81-1.386,3.795-2.784,8.637-2.784c0.55,0,0.996-0.444,1-0.994	c0.025-3.987-0.531-6.688-1.88-9.015L47,34.883v4.42c-0.43,0.302-0.714,0.8-0.714,1.364c0,0.168,0,0.679,0.843,1.9l0.822,1.193	l0.824-1.192c0.844-1.223,0.844-1.733,0.844-1.901c0-0.52-0.245-0.98-0.619-1.286v-5.769L49.536,33.272z M15,5.857	C15,5.385,15.448,5,16,5h10c0.552,0,1,0.385,1,0.857V8H15V5.857z M21,22c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2	C23,21.105,22.105,22,21,22z M35.499,47.433c-1.669-1.561-4.735-2.543-8.491-2.692c0.063-3.031,0.538-5.156,1.559-6.958l6.397,4.062	C35.128,41.948,35.313,42,35.5,42s0.372-0.052,0.536-0.156l6.396-4.061c1.022,1.806,1.497,3.931,1.56,6.957	C40.235,44.889,37.168,45.872,35.499,47.433z M35.5,39.815L23.963,32.49L35.5,26.142l11.537,6.349L35.5,39.815z" />
            </svg>

            <p>
                <h2 className="text-3xl font-bold">Experience and Knowledge</h2>
                Over the last seven-or-so years, I've been working with
                JavaScript, TypeScript, C#, Java, Rust, Ruby and more. <br />
                I've worked extensively with JS libraries like React,
                React Native, and Rust libraries like Rocket, Actix and
                Diesel.
            </p>

        </section>
    )
}

function Projects() {
    return (
        <section data-section="projects">
            <p>
                All of my open source projects are available on my <a href="https://github.com/tascord/">GitHub</a> page.
            </p>
        </section>
    )
}

function Testimonials() {
    return (
        <section data-section="projects">
            <p className="relative">
                <h2 className="text-3xl font-bold">Testimonials</h2>
                Real reviews of me of as a person, and as a developer.
            </p>

            <div className="reviews">

                <article>
                    <img src="https://mccartyweightloss.com/wp-content/uploads/kisspng-quotation-mark-symbol-pull-quote-sign-marks-vector-5ad89cafbbdd55.png" alt="Quote" />
                    <p>
                        well-punctuated, clear, quick-thinking, tolerant, creative, nonbinary person (yasspilled)
                    </p>
                    <sub>Navarre, Friend</sub>
                </article>

                <article>
                    <img src="https://mccartyweightloss.com/wp-content/uploads/kisspng-quotation-mark-symbol-pull-quote-sign-marks-vector-5ad89cafbbdd55.png" alt="Quote" />
                    <p>
                        Been an antivaxer since the start <a href="https://twitter.com/search?q=%23represent&src=typed_query&f=top">#represent</a> <a href="https://twitter.com/search?q=%23nobillgateschip&src=typed_query">#nobillgateschip</a> <a href="https://twitter.com/search?q=%23freemyhomiesjabbedup&src=typed_query&f=top">#freemyhomiesjabbedup</a> <br />
                        "Fighting the good fight, so 9.5/10"
                    </p>
                    <sub>Liam, Friend</sub>
                </article>

                <article>
                    <img src="https://mccartyweightloss.com/wp-content/uploads/kisspng-quotation-mark-symbol-pull-quote-sign-marks-vector-5ad89cafbbdd55.png" alt="Quote" />
                    <p>
                        helpful, courageous, can take on a bear (like not a hairy guy but like a real bear) with bare hands (not bear hands but bare ones like without additives.) (also thinking about it they could also probably take on a bear like a hairy person because thatd probably easier than a real bear yknow), superior intelligence, bedazzling charisma, impeccable dress sense,
                    </p>
                    <sub>Joe, Friend</sub>
                </article>

                <article>
                    <img src="https://mccartyweightloss.com/wp-content/uploads/kisspng-quotation-mark-symbol-pull-quote-sign-marks-vector-5ad89cafbbdd55.png" alt="Quote" />
                    <p>
                        flora is very good coder and has a marvellous ass
                    </p>
                    <sub>Fig, Partner</sub>
                </article>

                <article>
                    <img src="https://mccartyweightloss.com/wp-content/uploads/kisspng-quotation-mark-symbol-pull-quote-sign-marks-vector-5ad89cafbbdd55.png" alt="Quote" />
                    <p>
                        flora repeatedly proves their analytical thinking skills in their projects, and a natural curiosity aids them in expanding their technique. with a well-studied expertise, flora can apply knowledge in a range of areas not limited to code and design.
                    </p>
                    <sub>Fig (for real this time), Partner</sub>
                </article>

                <article>
                    <img src="https://mccartyweightloss.com/wp-content/uploads/kisspng-quotation-mark-symbol-pull-quote-sign-marks-vector-5ad89cafbbdd55.png" alt="Quote" />
                    <p>
                        direct, efficient, quick to learn, quick to build, impeccable dress sense, etc
                    </p>
                    <sub>Joe (for real this time), Friend</sub>
                </article>



            </div>


        </section>
    )
}

export default class Me extends Component<any, MeState> {

    constructor(props: any) {
        super(props);

        this.state = {
            section: 'about me'
        };

    }

    get_section = (section: MeState['section']) => {
        switch (section) {
            case 'about me':
                return <About />;
            case 'background':
                return <Background />;
            case 'skills':
                return <Skills />;
            case 'project':
                return <Projects />;
            case 'testimonials':
                return <Testimonials />;
            default:
                return <About />;
        }
    }

    render() {
        return (
            <>

                {/* Header */}
                <header className="">
                    <a href="/">
                        <h1>
                            <strong>
                                <i>&gt;</i><i>&gt;</i>
                            </strong>
                            ./flo
                        </h1>
                    </a>
                    <a href="mailto:oscar_hill@icloud.com">
                        <h1>
                            Get in touch!
                            <strong className="ml-2">
                                <i>&lt;</i><i>&lt;</i>
                            </strong>
                        </h1>
                    </a>
                </header>

                {/* Main */}
                <main>

                    <nav>
                        <button onClick={() => this.setState({ section: 'about me' })} className={this.state.section === 'about me' ? 'active' : ''}>About Me</button>
                        <button onClick={() => this.setState({ section: 'background' })} className={this.state.section === 'background' ? 'active' : ''}>Background</button>
                        <button onClick={() => this.setState({ section: 'skills' })} className={this.state.section === 'skills' ? 'active' : ''}>Skills</button>
                        <button onClick={() => this.setState({ section: 'project' })} className={this.state.section === 'project' ? 'active' : ''}>Projects</button>
                        <button onClick={() => this.setState({ section: 'testimonials' })} className={this.state.section === 'testimonials' ? 'active' : ''}>Reviews</button>
                    </nav>

                    {
                        this.get_section(this.state.section)
                    }

                </main>

            </>
        );
    }

}