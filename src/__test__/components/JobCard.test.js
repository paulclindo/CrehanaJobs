import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/ProviderMock";
import JobCard from "../../components/JobCard";
import JobcardMock from "../../__mocks__/JobcardMock";

describe("<JobCard/>", () => {
  test("Render JobCard Component with props", () => {
    const jobcard = shallow(
      <ProviderMock>
        <JobCard {...JobcardMock} />
      </ProviderMock>
    );
    expect(jobcard.length).toEqual(1);
  });
});
