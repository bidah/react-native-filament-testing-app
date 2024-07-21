import {
  FilamentScene,
  FilamentView,
  DefaultLight,
  Model,
  Camera,
} from "react-native-filament";
import HiphopGirl from "@/assets/models/hiphopgirl.glb";

export function FilamentScreen() {
  return (
    <FilamentScene>
      {/* 🏞️ A view to draw the 3D content to */}
      <FilamentView style={{ flex: 1 }}>
        {/* 💡 A light source, otherwise the scene will be black */}
        <DefaultLight />

        {/* 📦 A 3D model */}
        <Model source={HiphopGirl} />

        {/* 📹 A camera through which the scene is observed and projected onto the view */}
        <Camera />
      </FilamentView>
    </FilamentScene>
  );
}
