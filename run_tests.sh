#!/bin/bash
set -e

xcodebuild \
  -project ../Mozat.xcodeproj \
  -scheme DejaEnterprise \
  -configuration Release \
  -sdk iphonesimulator \
  CONFIGURATION_BUILD_DIR=/tmp/DejaEnterprise \
  TARGETED_DEVICE_FAMILY=1 \
  build

instruments \
  -t dejaTemplate \
  -D automation_results/Trace \
  /tmp/DejaEnterprise/Deja.app \
  -e UIARESULTSPATH automation_results \
  -e UIASCRIPT test_suite.js \
  -e UI_TESTS 1 \
  -e DATA_FACTORY_MESSAGE resetDocument

#sh run_test.sh

#instruments \
#  -t dejaTemplate \
#  -D automation_results/Trace \
#  /Users/jack/.jenkins/jobs/deja-ios/workspace/src/build/Release-iphonesimulator \
#  -e UIARESULTSPATH automation_results \
#  -e UIASCRIPT test_suite.js \
#  -e UI_TESTS 1 \
#  -e DATA_FACTORY_MESSAGE resetDocument

