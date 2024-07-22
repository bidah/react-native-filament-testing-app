import {
  FilamentScene,
  FilamentView,
  DefaultLight,
  Model,
  Camera,
  Skybox,
} from "react-native-filament";
import HiphopGirl from "@/assets/models/hiphopgirl.glb";

export function FilamentScreen() {
  return (
    <FilamentScene>
      <Renderer />
    </FilamentScene>
  );
}

function Renderer() {
  return (
    // 🏞️ A view to draw the 3D content to
    <FilamentView style={{ flex: 1 }}>
      {/* 💡 A light source, otherwise the scene will be black */}
      <DefaultLight />
      <Skybox colorInHex="#FFA500" />
      {/* 📦 A 3D model */}
      <Model
        transformToUnitCube
        source={HiphopGirl}
        rotate={[3, 2, 5]}
        translate={[0, 1, 1]}
      />
      {/* 📹 A camera through which the scene is observed and projected onto the view */}
      <Camera cameraPosition={[0, 0, 5]} cameraTarget={[0, 0, 0]} />
    </FilamentView>
  );
}
