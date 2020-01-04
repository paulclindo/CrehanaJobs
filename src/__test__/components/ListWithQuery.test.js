import { MockedProvider } from "@apollo/react-testing";

import {
  GET_JOBS_FILTERED,
  ListWithQuery
} from "../../containers/ListWithQuery";

const mocks = [
  {
    request: {
      query: GET_JOBS_FILTERED,
      variables: {
        textSearch: "Developer",
        countryId: "cjuv50xbq00f00735tff3nbux",
        companyId: "cjuv4wxdc00dl0735ts4ukqs7",
        order: "postedAt_DESC"
      }
    },
    result: {
      data: {
        countries: [
          {
            jobs: [
              {
                id: "cjuv5x5je00k70735fzuc3sis",
                title: "Developer Support Engineer",
                commitment: {
                  id: "cjtu8esth000z0824x00wtp1i",
                  title: "Full-time"
                },
                company: {
                  id: "cjuv4wxdc00dl0735ts4ukqs7",
                  name: "Prisma"
                },
                cities: [
                  {
                    id: "cjuv51m3s00fc0735xosrvscp",
                    name: "Berlin",
                    country: {
                      id: "cjuv50xbq00f00735tff3nbux",
                      name: "Germany"
                    }
                  }
                ],
                postedAt: "2019-04-24T11:55:58.693Z"
              }
            ]
          }
        ]
      }
    }
  }
];

it("renders without error", () => {
  renderer.create(
    <MockedProvider mocks={mocks}>
      <ListWithQuery
        title="Developer"
        countryId="cjuv50xbq00f00735tff3nbux"
        companyId="cjuv4wxdc00dl0735ts4ukqs7"
        order="postedAt_DESC"
      />
    </MockedProvider>
  );
});
