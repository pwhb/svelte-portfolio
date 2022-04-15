import { gql } from 'graphql-request';

export const completeQuery = gql`
query completeQuery($type: String = "", $id: ID = "cl0xggunb0l7u0dphx8cx1e57") {
  author(where: {id: $id}) {
    type
    imageSrc
    jobTitle
    name
    about
    bio
  },
  stacks {
    name
    teches {
      icon
      name
      url
    }
  },
 interests {
    name
    tags
  },
  socials {
    icon
    name
    url
  },
  experiences(where: {author: {type: $type}}) {
    companyName
    description
    end
    icon
    position
    start
    teches {
      icon
      name
    }
  },
  volunteerExperiences(where: {author: {type: $type}}) {
    name
    position
    end
    start
    icon
    description
      teches {
      icon
      name
    }
  },
 projects {
    description
    end
    icon
    images
    name
    slug
    start
    platforms {
      icon
      name
    }
    gitRepo
    demoUrl
    teches {
      icon
      name
      url
    }
    mockup
  }
}
`

// export const createTech = gql`
// mutation MyMutation($icon: String!, $name: String!, $url: String!) {
//   createTech(data: {icon: $icon, name: $name, url: $url}) {
//     id
//   }
// }
// `

// export const createSocial = gql`
// mutation createSocial($name: String = "", $url: String = "", $icon: String = "") {
//   createSocial(data: {name: $name, url: $url, icon: $icon}) {
//     id
//     name
//   }
// }
// `

export const authorsQuery = gql`
query getAuthors {
  authors {
    about
    bio
    imageSrc
    jobTitle
    name
  }
}
`

export const stacksQuery = gql`
query getStacks {
  stacks {
    name
    teches {
      icon
      name
      url
    }
  }
}
`

export const interestsQuery = gql`
query getInterests {
  interests {
    name
    tags
  }
}
`

export const socialsQuery = gql`
query getSocials {
  socials {
    icon
    name
    url
  }
}
`

export const experiencesQuery = gql`
query getExperiences($type: String = "") {
  experiences(where: {author: {type: $type}}) {
    companyName
    description
    end
    icon
    position
    start
    teches {
      icon
      name
    }
  },
   volunteerExperiences(where: {author: {type: $type}}) {
    name
    position
    end
    start
    icon
    description
      teches {
      icon
      name
    }
  }
}
`



