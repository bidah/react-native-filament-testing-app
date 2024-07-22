import { useCallback } from "react";
import { useSharedValue } from "react-native-worklets-core";
import HiphopGirl from "@/assets/models/hiphopgirl.glb";
import {
  type RenderCallback,
  FilamentView,
  Model,
  FilamentScene,
  DefaultLight,
  Camera,
} from "react-native-filament";

export function RotationScreen() {
  const rotation = useSharedValue([0, 0, 0]);

  const renderCallback: RenderCallback = useCallback(() => {
    "worklet";

    // Add a rotation of 1 degree every frame
    const newY = rotation.value[1] + 0.01;
    // We need to create a new array for the internal listeners to trigger
    rotation.value = [0, newY, 0];
  }, [rotation]);

  return (
    <FilamentScene>
      <FilamentView renderCallback={renderCallback}>
        <DefaultLight />
        <Camera cameraPosition={[0, 0, 5]} cameraTarget={[0, 0, 0]} />
        <Model transformToUnitCube rotation={rotation} source={HiphopGirl} />
      </FilamentView>
    </FilamentScene>
  );
}
