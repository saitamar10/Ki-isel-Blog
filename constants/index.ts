export const SPACE_NAME = 'Saitama',
  LINKS = {
    Home: '/',
    Posts: '/posts',
    Weekly: '/weekly',
    // Projects: '/projects'
    About: '/about'
  }

// PROMPT
export const SPACE = 'yucihent.space',
  BRANCH = 'main',
  INIT_BLOG_VERSION = '1.0.0',
  FRAMEWORK = 'next',
  INIT_FRAMEWORK_VERSION = '13.4.10'

// CMDS
export const HELP = 'help',
  CLEAR = 'clear',
  LIST = 'list',
  LS = 'ls',
  ABOUT = 'about',
  POSTS = 'posts',
  // PROJECTS = 'projects',
  INIT_CMD = HELP,
  COMMAND_NOT_FOUND = 'command not found',
  COMMANDS = [ABOUT, POSTS, HELP, LIST, LS, CLEAR] as const

export type CommandsType = (typeof COMMANDS)[number]

export const COMMAND_CONTENT_MAP: Record<
  Exclude<CommandsType, 'clear'>,
  any
> = {
  [HELP]: {
    [HELP]: 'show details',
    [`${LIST}/${LS}`]: ['list all commands', COMMANDS],
    [CLEAR]: 'clear all outputs',
    [ABOUT]: 'some information about me',
    [POSTS]: 'list all posts'
    // [PROJECTS]: 'list all projects'
  },

  [LIST]: COMMANDS,
  [LS]: COMMANDS,

  [ABOUT]: {
    introduction: `Ben İsmet ceber, front-end API kodlayıcısıyım, CLI ile ilgileniyorum, müzik 🎶 dijital ve geniş evren 🤣 gibi, herkese açık bir numaram var [Front-end Warehouse].👈`,
    skills: ['javascript', 'typescript', 'vue', 'react', 'nodejs'],
    platforms: {
      segmentfault: 'https://ismetceber.com.tr',
      juejin: 'https://www.r10.net/profil/123106-saitama.html'
    }
  },

  [POSTS]: 'post'

  // [PROJECTS]: 'project'
}
